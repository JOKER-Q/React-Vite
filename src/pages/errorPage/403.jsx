/*
 * @Descripttion:403页面
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-06-01 16:28:37
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-01 16:47:10
 */
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/utils/config/config'
import './index.less'
import { useEffect } from 'react'

const NotAuth = () => {
	const navigate = useNavigate()

	useEffect(() => {
		console.log('403页面渲染')
	}, [])

	const goHome = () => {
		navigate(HOME_URL)
	}
	return (
		<Result
			status="403"
			title="403"
			subTitle="Sorry, you are not authorized to access this page."
			extra={
				<Button type="primary" onClick={goHome}>
					Back Home
				</Button>
			}
		/>
	)
}

export default NotAuth
