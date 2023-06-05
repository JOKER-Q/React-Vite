/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-24 16:07:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-01 13:56:16
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.less'
import { store, persistor } from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
//React.StrictMode

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
)
