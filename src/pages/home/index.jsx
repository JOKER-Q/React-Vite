import { Outlet, Link } from 'react-router-dom'
import { Button, Layout, Menu, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Header, Sider, Content } = Layout
import './index.less'

const Home = () => {
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer }
	} = theme.useToken()

	const menuClick = item => {
		console.log('====================================')
		console.log('点击item', item)
		console.log('====================================')
	}

	return (
		<div className="home">
			<Layout className="myLayout">
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<Menu
						theme="dark"
						mode="inline"
						// defaultSelectedKeys={["0"]}
						items={[
							{
								key: '1',
								icon: <UserOutlined />,
								label: <Link to={'nav1'}>{'nav 1'}</Link>
							},
							{
								key: '2',
								icon: <VideoCameraOutlined />,
								label: <Link to={'nav2'}>{'nav 2'}</Link>
							},
							{
								key: '3',
								icon: <UploadOutlined />,
								label: <Link to={'nav3'}>{'nav 3'}</Link>
							}
						]}
						onClick={menuClick}
					/>
				</Sider>
				<Layout>
					<Header
						style={{
							padding: 0,
							background: colorBgContainer
						}}
					>
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: '16px',
								width: 64,
								height: 64
							}}
						/>
					</Header>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
							background: colorBgContainer
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</div>
	)
}
export default Home
