/*
 * @Descripttion:路由懒加载
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-06-01 16:58:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-05 10:19:20
 */
import { Suspense } from 'react'
import { Spin } from 'antd'

/**
 * @description 路由懒加载, 使用lazy进行路由懒加载后，每次点击Link后，再去请求相关的组件，那这个请求是会耗时间的
    在网速比较慢的情况下，会出现路由视图白屏的情况，所以使用Suspense标签包裹注册的路由来进行白屏时的页面展示
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = Comp => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%'
					}}
					spinning={true}
				/>
			}
		>
			<Comp />
		</Suspense>
	)
}

export default lazyLoad
