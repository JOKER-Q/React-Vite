/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-31 08:56:28
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-05-31 17:09:06
 */
import { Link } from 'react-router-dom'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { createSlice } from '@reduxjs/toolkit'
const layoutsSlice = createSlice({
	name: 'layouts',
	initialState: {
		isCollapse: false,
		menuList: []
	},
	reducers: {
		save(state, action) {
			return { ...state, ...action.payload }
		}
	}
})

export const { save } = layoutsSlice.actions

export default layoutsSlice.reducer

export const selectIsCollapse = state => {
	return state.layout.isCollapse
}

export const selectMenuList = state => {
	return state.layout.menuList
}
