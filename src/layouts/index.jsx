/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-26 13:39:12
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-05-31 09:06:30
 */
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'
import { useEffect } from 'react'
const { Sider, Content, Footer } = Layout
import './index.less'
import LayoutMenu from './components/layoutMenu'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsCollapse, save } from '@/redux/slices/layoutsSlice.js'
import LayoutHead from './components/layoutHead'
import { debounce } from 'throttle-debounce'
import AuthRouter from '@/routers/utils/routeGuard'

const Home = () => {
	const dispatch = useDispatch()
	const collapsed = useSelector(selectIsCollapse)
	const {
		token: { colorBgContainer }
	} = theme.useToken()

	// 监听窗口大小变化
	const listeningWindow = () => {
		let screenWidth = document.body.clientWidth
		if (!collapsed && screenWidth < 1200) {
			dispatch(save({ isCollapse: true }))
		}
		if (!collapsed && screenWidth > 1200) {
			dispatch(save({ isCollapse: false }))
		}
	}

	useEffect(() => {
		//添加resize监听事件
		window.addEventListener('resize', debounce(100, listeningWindow))
	}, [])

	return (
		<div className="home">
			<Layout className="myLayout">
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<LayoutMenu />
				</Sider>
				<Layout>
					<LayoutHead />
					<Content className="contentStyle" style={{ backgroundColor: colorBgContainer }}>
						<AuthRouter>
							<Outlet />
						</AuthRouter>
					</Content>
					<Footer className="footerStyle">React-Vite ©2023 Created by BAIBAIBAI</Footer>
				</Layout>
			</Layout>
		</div>
	)
}
export default Home
