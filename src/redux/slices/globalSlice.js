import { createSlice } from '@reduxjs/toolkit'
const globalSlice = createSlice({
	name: 'global',
	initialState: {
		user_token: ''
	},
	reducers: {
		save(state, action) {
			return { ...state, ...action.payload }
		}
	}
})

export const { save } = globalSlice.actions

export default globalSlice.reducer
