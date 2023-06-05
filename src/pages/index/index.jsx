/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-26 10:09:37
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-05-26 10:09:54
 */
import { useEffect } from 'react'

function IndexPage() {
	useEffect(() => {
		console.log('首页页面渲染')
	}, [])

	return <div>{'首页前置页面'}</div>
}

export default IndexPage
