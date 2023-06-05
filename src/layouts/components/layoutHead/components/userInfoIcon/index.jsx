/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-29 10:55:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-05-29 11:29:55
 */
import React from 'react'

import { Avatar, Dropdown } from 'antd'

import { UserOutlined } from '@ant-design/icons'
import './index.less'

function UserInfoIcon() {
	const items = [
		{
			key: '1',
			label: (
				<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
					首页
				</a>
			)
		},
		{
			key: '2',
			label: (
				<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
					个人中心
				</a>
			)
		},
		{
			key: '3',
			label: (
				<a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
					修改密码
				</a>
			)
		},
		{
			type: 'divider'
		},
		{
			key: '4',
			label: (
				<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
					退出登录
				</a>
			)
		}
	]

	return (
		<div className="UserInfoIcon">
			<div className="userName">用户名</div>
			<Avatar.Group>
				<Dropdown
					menu={{
						items
					}}
					placement="bottomRight"
					arrow
				>
					<Avatar
						style={{
							backgroundColor: '#1677ff'
						}}
						icon={<UserOutlined />}
					/>
				</Dropdown>
			</Avatar.Group>
		</div>
	)
}

export default UserInfoIcon
