/*
 * @Descripttion:全屏的加载组建
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-31 11:16:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-05-31 14:14:42
 */
import { Spin } from 'antd'
import ReactDOM from 'react-dom/client'
import './index.less'

let needLoadingRequestCount = 0 //正在进行中的Request请求数

// * 显示loading
export const showFullScreenLoading = (tip = '加载中') => {
	if (needLoadingRequestCount === 0) {
		let dom = document.createElement('div')
		dom.setAttribute('id', 'loading')
		document.body.appendChild(dom)
		ReactDOM.createRoot(dom).render(<Spin tip={tip} size="large" className="request-loading" />)
	}
	needLoadingRequestCount++
}

// * 隐藏loading
export const tryHideFullScreenLoading = () => {
	if (needLoadingRequestCount < 0) return
	needLoadingRequestCount--
	if (needLoadingRequestCount === 0) {
		document.body.removeChild(document.getElementById('loading'))
	}
}
