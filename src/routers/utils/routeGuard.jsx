import { useLocation, Navigate } from 'react-router-dom'
import { searchRoute } from '@/utils/comFun/index'
import { routers } from '@/routers/index'
import { store } from '@/redux/store'

const RouteGuard = props => {
	const { pathName } = useLocation()
	console.log('routers', routers)
	// * 判断是否有Token
	const token = store.getState()?.globalSlice.user_token
	if (!token) return <Navigate to="/login" replace /> //没有token直接跳转到登录页
	return props.children
}

export default RouteGuard
