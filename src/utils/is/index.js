/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-31 13:38:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-05-31 13:38:57
 */

/**
 * @description: 判断值是否未某个类型
 */
export function is(val, type) {
	return toString.call(val) === `[object ${type}]`
}

/**
 * @description:  是否为函数
 */
export function isFunction(val) {
	return is(val, 'Function')
}
