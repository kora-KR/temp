/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */

/*
// 开放的接口
import http from './interface'

http.config.baseUrl = "http://localhost:8080/api/"

http.request(url:'user/list',method:'GET').then((res)=>{
	console.log(JSON.stringify(res))
})
http.get('user/list').then((res)=>{
	console.log(JSON.stringify(res))
})
http.get('user/list', {status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.post('user', {id:1, status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.put('user/1', {status: 2}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.delete('user/1').then((res)=>{
	console.log(JSON.stringify(res))
}) 

*/

const url = {
	dev: '',
	test: '',
	debug: ''
}

export default {
	// 默认参数
	config: {
		baseUrl: "",
		header: {
			'Content-Type':'application/json;charset=UTF-8',
			"authorization": '2'
		},  
		// 默认请求参数
		data: {
			// 格兰德接口请求
			// version: '1.0',
			// app_id: '708eb6be5cc145f8a75bc32576b4dca80',
			// wechat_app_id: 'wx419056558a7d666e' ,
		},
		method: "POST",
		success() {},
		fail() {},
		complete() {}
	},
	interceptor: {
		request: null,
		response: null
	},
	request(options) {
		// 参数重置,无赋值获取默认参数
		// 格兰德接口请求
		// this.config.baseUrl = ( process.env.NODE_ENV === 'development' ) ? 'https://service.so315.cn/open/api/gateway.do' : '996'
		console.log(options, 11112)
		// 部分信息
		// this.config.baseUrl = 'https://www.apiopen.top/weatherApi?city=' + options.data 
		
		// 全部信息
		this.config.baseUrl = 'https://www.tianqiapi.com/api/?version=v1&city=' + options.data 
		
		!options && ( options = {} )
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl
		options.data = options.data ? { ...options.data, ...this.config.data } : this.config.data
		options.method = options.method || this.config.method
		//TODO 加密数据
		
		//TODO 数据签名
		/* 
		_token = {'token': getStorage(STOREKEY_LOGIN).token || 'undefined'},
		_sign = {'sign': sign(JSON.stringify(options.data))}
		options.header = Object.assign({}, options.header, _token,_sign) 
		*/
	   
		return new Promise((resolve, reject) => {
			let _config = null
			// 整合请求数据结构 - 前后端商量着来
			options.complete = (response) => {
				let statusCode = response.statusCode
				response.config = _config
				// 开发环境
				// if (process.env.NODE_ENV === 'development') {
				// 	if (statusCode === 200) { 
				// 		 
				// 	}
				// }
				
				// 拦截器
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					if (newResponse) {
						response = newResponse
					}
				}
				// 统一的响应日志记录
				// _reslog(response)
				if (statusCode === 200) { //成功
					resolve(response);
				} else {
					reject(response)
				}
			}
			_config = Object.assign({}, this.config, options)
			// _config.requestId = new Date().getTime()

// 			if (this.interceptor.request) {
// 				this.interceptor.request(_config)
// 			}
// 			
// 			统一的请求日志记录
// 			_reqlog(_config)
// 
// 			if (process.env.NODE_ENV === 'development') {
// 				console.log("【" + _config.requestId + "】 地址：" + _config.url)
// 				if (_config.data) {
// 					console.log("【" + _config.requestId + "】 参数：" + JSON.stringify(_config.data))
// 				}
// 			}
			// 整合的_config去请求接口
			uni.request(_config);
		});
	},
	
	// 请求方法 - 指向request
	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'  
		return this.request(options)
	},
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	delete(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
}


// 请求接口日志记录
function _reqlog(req) {
	if (process.env.NODE_ENV === 'development') {
		console.log("【" + req.requestId + "】 地址：" + req.url)
		if (req.data) {
			console.log("【" + req.requestId + "】 请求参数：" + JSON.stringify(req.data))
		}
	}
	//TODO 调接口异步写入日志数据库
}

// 响应接口日志记录
function _reslog(res) {
	let _statusCode = res.statusCode;
	if (process.env.NODE_ENV === 'development') {
		console.log("【" + res.config.requestId + "】 地址：" + res.config.url)
		if (res.config.data) {
			console.log("【" + res.config.requestId + "】 请求参数：" + JSON.stringify(res.config.data))
		}
		console.log("【" + res.config.requestId + "】 响应结果：" + JSON.stringify(res))
	}
	//TODO 除了接口服务错误外，其他日志调接口异步写入日志数据库
	switch(_statusCode){
		case 200:
			break;
		case 401:
			break;
		case 404:
			break;
		default:
			break;
	}
}

