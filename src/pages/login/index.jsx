/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-26 09:58:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-05-31 17:22:26
 */
import { useEffect } from 'react'
import loginLeft from '@/assets/images/loginBg.png'
import logo from '@/assets/logos/vite.svg'
import './index.less'
import LoginForm from './compoents/loginForm'

function Login() {
	return (
		<div className="login-container">
			<div className="login_box">
				<div className="login-left">
					<img src={loginLeft} alt="login" />
				</div>
				<div className="login-form">
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<span className="logo-text">Vite+React</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	)
}

export default Login
