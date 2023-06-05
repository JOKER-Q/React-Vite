/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-26 09:16:32
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-05 14:34:11
 */
import React, { lazy } from 'react'
import { createBrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import lazyLoad from '@/routers/utils/lazyLoad'
import Login from '../pages/login'
import Layouts from '../layouts'

//路由懒加载
const Index_page = React.lazy(() => import('@/pages/index'))
const Page_403 = React.lazy(() => import('@/pages/errorPage/403'))
const Page_404 = React.lazy(() => import('@/pages/errorPage/404'))
const Page_500 = React.lazy(() => import('@/pages/errorPage/500'))

export const routers = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/login" />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/home',
		element: <Layouts />,
		children: [
			{ index: true, element: lazyLoad(Index_page) },
			{ path: 'index', element: lazyLoad(Index_page) },
			{
				children: [
					{ path: '403', element: lazyLoad(Page_403) },
					{ path: '404', element: lazyLoad(Page_404) },
					{ path: '500', element: lazyLoad(Page_500) }
				]
			},
			{ path: 'nav1', element: <div>{'nav1'}</div> },
			{ path: 'nav2', element: <div>{'nav2'}</div> },
			{ path: 'nav3', element: <div>{'nav3'}</div> }
		]
	},
	{
		path: '404',
		element: lazyLoad(Page_404)
	},
	{
		path: '*',
		element: <Navigate to="/404" />
	}
])
