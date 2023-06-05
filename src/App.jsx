/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-24 16:07:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-05 13:53:48
 */
import { routers } from './routers/index'
import { RouterProvider } from 'react-router-dom'

const App = () => {
	return <RouterProvider router={routers} />
}

export default App
