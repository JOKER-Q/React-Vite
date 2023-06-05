/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-26 13:57:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-05-29 09:47:42
 */
import React from 'react'
import './index.less'
import { useSelector } from 'react-redux'
import react_icon from '@/assets/react.svg'
import vite_icon from '@/assets/logos/vite.svg'
import { selectIsCollapse } from '@/redux/slices/layoutsSlice.js'

const LayoutLogo = () => {
	const collapsed = useSelector(selectIsCollapse)
	return (
		<div className="layoutLogo">
			<img src={vite_icon} alt="" />
			{!collapsed && <div className="logo_test">React-Vite</div>}
		</div>
	)
}

export default LayoutLogo
