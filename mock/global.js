/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-30 14:14:09
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-01 16:21:00
 */
import md5 from 'js-md5'

//   url//这里的api相当于公共请求头，根据自己的需要修改
//   method// 请求方式
//   timeout// 设置超时时间
//   statusCode// 状态吗
//   response// 响应数据（JSON）
//   rawResponse// 响应（非JSON）
//{url,method,timeout,statusCode,response}

export default [
	{
		url: '/login',
		method: 'post',
		timeout: 2000, //延时
		statusCode: 200,
		response: ({ body }) => {
			if (body.userName === 'admin') {
				return {
					code: 200,
					data: {
						user_token: md5('admin')
					}
				}
			} else if (body.userName === 'user') {
				return {
					code: 200,
					data: {
						user_token: md5('user')
					}
				}
			} else {
				return {
					code: 401,
					data: {}
				}
			}
		}
	},
	{
		url: '/menuList',
		method: 'get',
		statusCode: 200,
		timeout: 1000, //延时
		response: ({ query }) => {
			return {
				code: 200,
				data: {
					list: [
						{ icon: 'HomeOutlined', title: '首页', path: '/index' },
						{
							icon: 'ExclamationCircleOutlined',
							title: '错误页面',
							path: '/error',
							children: [
								{ icon: 'AppstoreOutlined', title: '403页面', path: '/403' },
								{ icon: 'AppstoreOutlined', title: '404页面', path: '/404' },
								{ icon: 'AppstoreOutlined', title: '500页面', path: '/500' }
							]
						},
						{ icon: 'AreaChartOutlined', title: 'nav1', path: '/nav1' },
						{ icon: 'AreaChartOutlined', title: 'nav2', path: '/nav2' },
						{
							icon: 'AreaChartOutlined',
							title: 'nav3',
							path: '/nav3'
						}
					]
				}
			}
		}
	}
]
