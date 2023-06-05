/*
 * @Descripttion:公用方法
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-06-01 09:35:18
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-06-01 09:35:40
 */
/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (path, routes = []) => {
	let result = {}
	for (let item of routes) {
		if (item.path === path) return item
		if (item.children) {
			const res = searchRoute(path, item.children)
			if (Object.keys(res).length) result = res
		}
	}
	return result
}
