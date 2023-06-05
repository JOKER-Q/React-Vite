/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-26 13:47:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-01 15:50:03
 */
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, Spin } from 'antd'
import * as Icons from '@ant-design/icons'
import LayoutLogo from './components/layoutLogo'
import { useDispatch, useSelector } from 'react-redux'
import { save, selectMenuList } from '@/redux/slices/layoutsSlice'
import request from '@/service/axios'
import { searchRoute } from '@/utils/comFun/index'
import './index.less'

const LayoutMenu = () => {
	const dispatch = useDispatch()
	const storeMenu = useSelector(selectMenuList)
	const [menuList, setMenuList] = useState([])
	const [loading, setLoading] = useState(false)
	const [selectedKeys, setSelectedKeys] = useState([])
	const { pathname } = useLocation()

	useEffect(() => {
		if (pathname === '/home') {
			setSelectedKeys(['/index'])
		} else {
			setSelectedKeys([pathname?.replace('/home', '')])
		}
	}, [pathname])

	// 动态渲染 Icon 图标
	const customIcons = Icons
	const addIcon = name => {
		return React.createElement(customIcons[name])
	}

	const getItem = (label, key, icon, children, type) => {
		return { key, icon, children, label, type }
	}

	// 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
	const deepLoopFloat = (menuList, newArr = []) => {
		menuList.forEach(item => {
			if (!item?.children?.length) {
				newArr.push(getItem(item.title, item.path, addIcon(item.icon)))
			} else {
				newArr.push(getItem(item.title, item.path, addIcon(item.icon), deepLoopFloat(item.children)))
			}
		})
		return newArr
	}

	const getMenuList = async () => {
		setLoading(true)
		try {
			let { data } = await request.get('/menuList', {}, { headers: { noLoading: true } })
			console.log('--->', deepLoopFloat(data?.list))
			setMenuList(deepLoopFloat(data?.list))
			dispatch(save({ menuList: data?.list }))
		} catch (error) {
			console.log('error')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		//获取菜单列表
		getMenuList()
	}, [])

	const navigate = useNavigate()
	const menuClick = ({ key }) => {
		const clickRouter = searchRoute(key, storeMenu) //跳转外链
		if (clickRouter.isLink) window.open(clickRouter.isLink, '_blank') //跳转外链
		navigate(`/home${key}`)
	}

	return (
		<>
			<Spin spinning={loading} tip="Loading..." wrapperClassName={'spin'}>
				<LayoutLogo />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['/index']}
					items={menuList}
					onClick={menuClick}
					selectedKeys={selectedKeys}
				/>
			</Spin>
		</>
	)
}

export default LayoutMenu
