/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-26 14:10:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-05-29 10:54:55
 */
import { MenuFoldOutlined, MenuUnfoldOutlined, FullscreenOutlined } from '@ant-design/icons'
import { Button, Layout, theme } from 'antd'
const { Header } = Layout
import { useSelector, useDispatch } from 'react-redux'
import { selectIsCollapse, save } from '@/redux/slices/layoutsSlice.js'
import FullScreen from './components/fullScreen'
import UserInfoIcon from './components/userInfoIcon'
import './index.less'

const LayoutHead = () => {
	const {
		token: { colorBgContainer }
	} = theme.useToken()
	const dispatch = useDispatch()
	const collapsed = useSelector(selectIsCollapse)
	return (
		<Header
			style={{
				padding: 0,
				background: colorBgContainer
			}}
			className="header"
		>
			<div className="head_left">
				<Button
					type="text"
					icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => dispatch(save({ isCollapse: !collapsed }))}
					style={{
						fontSize: '19px',
						width: 64,
						height: 64
					}}
				/>
			</div>
			<div className="head_right">
				<FullScreen />
				<UserInfoIcon />
			</div>
		</Header>
	)
}

export default LayoutHead
