import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
const test = (data) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		console.log('个性化response....', response, 666)
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
        url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
        data,
    })
}

// 轮播图
const banner = (data) => {
    return http.request({
        url: '/banner/36kr',
        method: 'GET', 
        data,
		// handle:true
    })
}

// 数据列表
const list = (data) => {
	http.interceptor.response = (response) => {
		console.log('个性化response....', response, 666)
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
        data: { ...data, method: 'x315.bigblue.hotbillBoard' },
    })
}

const weather = (data) => {
	http.interceptor.response = (response) => {
		console.log('天气函数拦截器', response, 111)
		//判断返回状态 执行相应操作
		return response;
	}
	return http.request({
	    data
	})
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	list,
	test,
    banner,
	weather
}