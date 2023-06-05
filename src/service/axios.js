/*
 * @Descripttion: Axios的Js封装
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-09 13:48:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-01 15:21:26
 */
import { message } from 'antd'
import { store } from '@/redux/store'
import axios from 'axios'
import qs from 'qs'
import NProgress from '@/components/nprogress/'
import { AxiosCanceler } from '@/service/axiosCancel'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/components/loading'
let serviceIntance = undefined

const axiosCanceler = new AxiosCanceler()

function request(url, options = {}) {
	const { data, method = '', config = {} } = options
	//此处在发送请求之前拿到请求所需的一些参数，因此可在此处进行一些请求参数的处理
	//exp:可自定义请求头 config.headers: {'X-Requested-With': 'XMLHttpRequest'},
	createServiceIntance()
	switch (method.toLowerCase()) {
		case 'get':
			if (data && qs.stringify(data) != '') {
				url += url.includes('?') ? '&' : '?'
				url += qs.stringify(data)
			}
			return serviceIntance.get(url, config)
		case 'delete':
			return serviceIntance.delete(url, { ...config, data })
		case 'head':
			return serviceIntance.head(url, config)
		case 'options':
			return serviceIntance.options(url, config)
		case 'post':
			return serviceIntance.post(url, data, config)
		case 'put':
			return serviceIntance.put(url, data, config)
		case 'patch':
			return serviceIntance.patch(url, data, config)
		default:
			return serviceIntance.request({ ...config })
	}
}

//get请求是用来获取数据的,相当于数据库中的select操作一样,不对服务器的数据做任何的修改
function get(url, param, config) {
	return request(url, { method: 'get', data: param, config })
}

//delete请求用来删除某一行的，该请求就像数据库的delete操作一样
function del(url, param, config) {
	return request(url, { method: 'delete', data: param, config })
}

//与get方法类似，但不返回message body内容，仅仅是获得获取资源的部分信息（content-type、content-length）
function head(url, param, config) {
	return request(url, { method: 'head', data: param, config })
}

//options请求属于浏览器的预检请求，查看服务器是否接受请求，预检通过后，浏览器才会去发get，post，put，delete等请求。
function options(url, param, config) {
	return request(url, { method: 'options', data: param, config })
}

//post请求与put请求类似,都是向服务端发送数据,但post请求会修改数据的种类,像数据库的insert操作一样,会创建新的内容,常用来数据的提交,post侧重于对于数据的增加
function post(url, param, config) {
	return request(url, { method: 'post', data: param, config })
}

//put请求是向服务器端发送数据,相当于数据库的update操作,put的侧重点在于对于数据的修改操作
function put(url, param, config) {
	return request(url, { method: 'put', data: param, config })
}

//用于创建、更新资源，于PUT类似，区别在于PATCH代表部分更新
function patch(url, param, config) {
	return request(url, { method: 'patch', data: param, config })
}

function service(config) {
	return request(config.url, { config })
}

//创建axios实例并为其添加请求拦截器和响应拦截器
const createServiceIntance = () => {
	serviceIntance = axios.create({
		// baseURL: 'https://echo.apifox.com', // 设置统一的请求前缀
		timeout: 500000, // 设置统一的超时时长
		// 跨域时候允许携带凭证
		withCredentials: true
	})
	// 添加请求拦截器
	serviceIntance.interceptors.request.use(
		function (config) {
			// 在发送请求之前做些什么
			NProgress.start() //进度条
			// * 将当前请求添加到 pending 中
			axiosCanceler.addPending(config)
			config.headers?.noLoading || showFullScreenLoading() //全屏的请求loading
			//将登录后的用户token放在head的token里
			let token = store.getState()?.globalSlice.user_token
			return { ...config, headers: { ...config.headers, 'x-access-token': token } }
		},
		function (error) {
			// 对请求错误做些什么
			return Promise.reject(error)
		}
	)

	// 添加响应拦截器
	serviceIntance.interceptors.response.use(
		function (response) {
			// 2xx 范围内的状态码都会触发该函数。
			const { data, config } = response
			NProgress.done()
			// * 在请求结束后，移除本次请求(关闭loading)
			axiosCanceler.removePending(config)
			tryHideFullScreenLoading()
			// 对响应数据做点什么
			return data
		},
		function (error) {
			NProgress.done()
			// 超出 2xx 范围的状态码都会触发该函数。
			// 对响应错误做点什么
			tryHideFullScreenLoading()
			handleNetworkError(error)
			return Promise.reject(error)
		}
	)
}

//错误处理
const handleNetworkError = error => {
	if (error.response) {
		let errMessage = '未知错误'
		if (error.response.status) {
			switch (error.response.status) {
				case 400:
					errMessage = '错误的请求'
					break
				case 401:
					errMessage = '未授权，请重新登录'
					break
				case 403:
					errMessage = '拒绝访问'
					break
				case 404:
					errMessage = '请求错误,未找到该资源'
					break
				case 405:
					errMessage = '请求方法未允许'
					break
				case 408:
					errMessage = '请求超时'
					break
				case 500:
					errMessage = '服务器端出错'
					break
				case 501:
					errMessage = '网络未实现'
					break
				case 502:
					errMessage = '网络错误'
					break
				case 503:
					errMessage = '服务不可用'
					break
				case 504:
					errMessage = '网络超时'
					break
				case 505:
					errMessage = 'http版本不支持该请求'
					break
				default:
					errMessage = `其他连接错误 --${error.response.status}`
			}
		} else {
			errMessage = `无法连接到服务器！`
		}
		message.error(errMessage)
	} else {
		return Promise.reject(error)
	}
}

export default { get, del, head, options, post, put, patch, service }
