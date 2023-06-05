/*
 * @Descripttion:404页面
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-06-01 16:28:37
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-01 16:34:42
 */
import { useEffect } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/utils/config/config'
import './index.less'

const NotFound = () => {
	const navigate = useNavigate()
	const goHome = () => {
		navigate(HOME_URL)
	}

	useEffect(() => {
		console.log('404页面渲染')
	}, [])

	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button type="primary" onClick={goHome}>
					Back Home
				</Button>
			}
		/>
	)
}

export default NotFound
