/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-26 14:25:14
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-01 14:05:55
 */
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit'
import layout from './slices/layoutsSlice'
import globalSlice from '@/redux/slices/globalSlice'
import { persistStore, persistReducer } from 'redux-persist' //持久化存储
import storage from 'redux-persist/lib/storage' //持久化存储

//create reducer
const reducers = combineReducers({
	layout,
	globalSlice
})

//持久化存储
const persistConfig = {
	key: 'redux-state', // 储存的标识名
	storage // 储存方式
}

const persistReducerConfig = persistReducer(persistConfig, reducers)

// 创建 store
const store = configureStore({
	reducer: persistReducerConfig,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			//关闭redux序列化检测
			serializableCheck: false
		})
})

//创建持久化store
const persistor = persistStore(store)

export { store, persistor }
