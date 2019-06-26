<template>
	<view class='out'>
		<image :src="bg" class="background" mode=""></image>
		<!-- #ifdef H5 -->
	<!-- 	<svg class="hurricane-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-437 254.4 85 52.6" style="enable-background:new -437 254.4 85 52.6;" xml:space="preserve">
			<path class="cloud" d="M-361.9,280.5c1.4,0,2.6,0.7,3.4,1.7h1.1c0.4-8.2-5.9-10.8-5.9-10.8c-2.2-1.5-5.4-1-5.4-1
				c-0.1-4.1-2.9-7.4-2.9-7.4c-4.7-5.5-10.3-4.9-10.3-4.9c-7.4-0.2-11,5.9-11,5.9c-5.6-4-14.3-2.6-18.2,3.1c-0.7,1.1-1.3,2.2-1.8,3.4
				c0,0.1-0.3,1.2-0.4,1.2c3.5-0.6,6.6,1.6,6.6,1.6s1.1-1.1,1.2-1.3c2.4-2.4,5.6-3.6,9-3.2c4.4,0.5,8.5,3,9.9,7.4
				c0.1,0.2,0.8,2.4,0.6,2.4c5.3,0.1,7.3,3.6,7.3,3.6h13.4C-364.5,281.2-363.3,280.5-361.9,280.5z"/>
			<path class="cloud" d="M-386,279.6c-0.2,0-0.4,0-0.6,0.1c-0.1-0.8-0.2-1.7-0.4-2.4c-0.3-1-0.8-2-1.4-2.9c-2-2.9-5.3-4.8-9-4.8
				c-2.3,0-4.4,0.7-6.1,1.9c-0.6,0.4-1.1,0.8-1.6,1.3c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.5-0.6,0.8c-1.8-1.2-3.9-1.9-6.2-1.9
				c-5.5,0-10,4-10.8,9.3c-3.5,1-6.1,3.9-6.6,7.6h26.3h12.7h2.3l4.7-6.2c0.6-0.8,1.7-0.9,2.5-0.3s0.9,1.7,0.3,2.5l-3.1,4h0.5h5.6h0.7
				c0.1,0,0.2-0.4,0.2-1.1C-377.4,283.5-381.3,279.6-386,279.6z"/>
			<polyline class="lightening" points="-382.8,284.2 -387.9,290.9 -380.6,291.2 -387.9,302 "/>
			<path class="line" d="M-426.9,294.4l-5.1,7.3"/>
			<path class="line" d="M-420.8,294.4l-5.1,7.3"/>
			<path class="line" d="M-415.4,294.4l-5.1,7.3"/>
			<path class="line" d="M-409.9,294.4l-5.1,7.3"/>
			<path class="line" d="M-404.5,294.4l-5.1,7.3"/>
			<path class="line" d="M-399.1,294.4l-5.1,7.3"/>
			<path class="line" d="M-393.7,294.4l-5.1,7.3"/>
			<path class="line" d="M-388.2,294.4l-5.1,7.3"/>
			<g>
				<path class="little-path path-1" d="M-374.8,287.2h10.6"/>
				<path class="little-path path-2" d="M-373.8,289.3h10.9"/>
				<path class="big-path" d="M-376,288.3c0,0,14,0,14,0c1.7,0,3.1-1.4,3.3-3.1c0-0.5,0-1-0.3-1.4c-0.9-2.3-4.1-2.7-5.6-0.7
					c-0.4,0.6-0.7,1.3-0.7,1.9"/>
				<path class="little-path path-3" d="M-364.1,285c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2"/>
			</g>
		</svg> -->
		
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN -->
<!-- 		<button type="primary" open-type='getUserInfo' @getuserinfo="handleClickGetUserInfo">授权登录</button>
		<button type="primary" @click="handleClickGetLocal">获取地理位置</button> -->
		<!-- #endif -->
		
		<!-- 多端 - 兼容显示信息 -->
		<view class="main">
			<view class="search">
				<uni-icon type="spinner" size="14" color="#fff" class='search_icon'></uni-icon>
				<input class='search_input' type="text" value="" placeholder="输入城市名称 | 查询当地天气 (开发中)" placeholder-style='color: #fff' />
			</view>
			
			<view class="user_info flex_box_left padding">
				<image :src="userInfo.logo" class='logo' mode=""></image>
				<view class="name">{{userInfo.name}}</view>
				<uni-icon type="more-filled" size="20" color="#fff" @click='handleClickMore'></uni-icon>
				<koraBg :futuretemp='futuretemp' :top='top' @bgHide='handleClickHideBg' @bgChange='bgChange'/>
			</view>
			<view class="tip_info flex_box_between padding">
				<view class="city flex_box_left">
					<uni-icon type="location" size="14" color="#fff"></uni-icon>
					<text> {{addressName}}</text>
					<uni-icon type="arrowdown" size="20" color="#fff" font-weight='600'></uni-icon>
				</view>
				<view class='fresh_time' @click='handleClickFreshTime'>{{freshData}} 更新</view>
			</view>
			
			<view class='temp_today'>
				<view class="temp flex_box_center">
					{{tempInfo.temp}} <text>℃</text>
				</view>
				<view class="flex_box_center">{{tempInfo.state}}</view>
				<view class="air flex_box_center">空气质量 {{tempInfo.air_level}}</view>
			</view>
			
			<!-- 未来天气 -->
			<tempList :futuretemp='futuretemp'/>
			
			<!-- 天气参数 -->
			<paramList :todayParam='todayParam'/>
			
			<!-- 温馨提示 -->
			<warmPrompt :todayInfo='todayInfo'/>
			
			<view class="author">开发者 · Kora</view>
			<!-- #ifdef H5 -->
			<view class="author tip_h5">详细数据请查看小程序</view>
			<image class='mini_code' src="/static/img/qdtq.jpg" mode="widthFix"></image>
			<!-- #endif -->
			
			<controlMap/>
		</view>
	</view>
</template>

<script>
	// 高德地图
	import amap from '../../common/amap-wx.js';
	// icon - UI
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	
	
	import koraBg from '@/components/kora-bg'
	import tempList from '@/components/index-temp'
	import paramList from '@/components/param-list'
	import warmPrompt from '@/components/warm-prompt'	
	import controlMap from '@/components/control-map'
	
	export default {
		data() {
			return {
				top: '-190',
				bg: '/static/img/bg0.jpg',
				userInfo: {
					logo: '/static/img/logo.png',
					name: 'Run'
				},
				tempInfo: {
					temp: 22,
					state: '晴',
					air_level: '优',
				},
				freshData: '',
				todayInfo: [],
				todayParam: [],
				futuretemp: Array(5).fill({date: '2020-08-08', tem2: '22℃', tem1: '24℃', wea: '晴', win: ['东风'], win_speed: '2~3级'}),
				amapPlugin: null,
				key: 'f4a81547cc408fd1fb6a37882d0e05b2',
				addressName: '青岛',
				title: '网络请求',
				loading: false,
				res: '',
			}
		},
		components: {
			koraBg,
			uniIcon,
			tempList,
			paramList,
			warmPrompt,
			controlMap
		},
		async onLoad() {
			// #ifdef MP-WEIXIN
			
			// 获取ip - 真机乱码
			// uni.request({
			// 	url: 'https://ip.ws.126.net/ipquery', 
			// 	success: (res) => {
			// 		console.log(res.data.split('localAddress')[1].split('city:')[1].split("\"")[1], 888);
			// 		this.addressName = res.data
			// 	}
			// })
			// 格兰德接口请求
			// var hot_list_par = {
			// 	data: {
			// 		page_no: 1,
			// 		page_size: 20
			// 	}
			// }
			// let res = await this.$api.list(hot_list_par);
			// 高德地图 - 这玩意也不好使啊
			// this.amapPlugin = new amap.AMapWX({  
			// 	key: this.key
			// });
			// 
			// this.amapPlugin.getRegeo({
			// success: (data) => {  
			// 		console.log(data)
			// 		this.addressName = data[0].name;
			// 	}  
			// });
			// 获取用户地理位置
			// uni.getLocation({
			// 	type: 'wgs84',
			// 	success: function (res) {
			// 		// console.log(res.address.country, 888)
			// 		// this.addressName = res.address.country + '222' + res.address.province + '3333' + res.address.city
			// 		console.log('当前位置的经度：' + res.longitude);
			// 		console.log('当前位置的纬度：' + res.latitude);
			// 	}
			// });
			// 获取更新时间
			this.freshTime()
			this.getWxTempInfo()
			
			// #endif
			
			// #ifdef H5
			
			// uni.chooseLocation({
			// 	success: function (res) {
			// 		console.log(res,11);	
			// 		console.log('位置名称：' + res.name);
			// 		console.log('详细地址：' + res.address);
			// 		console.log('纬度：' + res.latitude);
			// 		console.log('经度：' + res.longitude);
			// 	}
			// });
			
			uni.request({
				url: '/weather/api/?version=v1&city=' + '青岛', 
				success: (res) => {
					console.log(res);
				}
			})
			// #endif
		},
		methods: {
			handleClickGetUserInfo(e) {
				console.log(e)
			},
			handleClickGetLocal() {
				uni.getLocation({
					type: 'wgs84',
					success: function (res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
					}
				});
			},
			handleClickFreshTime() {
				this.freshTime()
				this.getWxTempInfo()
			},
			async getWxTempInfo() {
				let res = await this.$api.weather('青岛');
				console.log(res, '青岛天气')
				
				// 置空数据
				this.todayInfo = ''
				
				let todayInfos = res.data.data[0]
				// 基础数据
				this.tempInfo = { ...this.tempInfo, temp: todayInfos.tem[0] + todayInfos.tem[1], state: todayInfos.wea, air_level: todayInfos.air_level}
				
				// 七天预报
				this.futuretemp = res.data.data
				
				// 天气参数
				this.todayParam = [ {title: '温度（℃）', value: todayInfos.tem}, {title: '最低温度（℃）', value: todayInfos.tem2}, {title: '最高温度（℃）', value: todayInfos.tem1}, {title: '相对湿度（%）', value: todayInfos.humidity},  {title: '风向', value: todayInfos.win[0]}, {title: '风速（mk/h）', value: todayInfos.win_speed}, {title: '天气状况', value: todayInfos.wea}, {title: '云量', value: todayInfos.air}]
				
				// 温馨提示
				todayInfos.index.forEach((item, index, arr)=> {
					this.todayInfo = [...this.todayInfo, item]
				});
				this.todayInfo = [ { title: '旅游指数', level: '优', desc: '带着美好的心情，什么天气都是晴空万里' }, ...this.todayInfo, { title: '空气质量指数', level: todayInfos.air_level, desc: todayInfos.air_tips}, ].reverse()
			},
			freshTime() {
				var myDate = new Date()
				this.freshData = this.dateDeal(+myDate.getMonth() + 1) + '-' + this.dateDeal(myDate.getDate()) + ' ' + this.dateDeal(myDate.getHours())+ ':' + this.dateDeal(myDate.getMinutes())
			},
			dateDeal(x) {
				return ( x >= 10 ? x : ('0' + x ))
			},
			handleClickMore() {
				this.top = 0
			},
			handleClickHideBg() {
				this.top = '-190'
			},
			bgChange(e) {
				this.bg = '/static/img/bg' + e + '.jpg'
			}
		},
		onShareAppMessage(res) {
			// if (res.from === 'button') {// 来自页面内分享按钮
			//   console.log(res.target)
			// }
			return {
			  title: '青岛天气',
			  content: '青岛本周天气查询',
			  path: '/pages/index/index'
			}
		  }
		}
</script>

<style lang="scss">
	// @import "../../static/css/normalize.css";
	// @import "../../static/css/style.css";
	
	@import "../../static/css/default";

	.background{position: absolute; z-index: 1; @include postion-full-screen}
	.main{position: fixed; z-index: 2; overflow-y: scroll; @include postion-full-screen}
	.out{width: 100%; height: 100%}
	.search{@include flex-box(flex-start); position: relative; top: 0upx; left: 50%; transform: translateX(-50%); box-sizing: border-box; width: 90%; height: 80upx; border-bottom: 1upx solid #fff;
		.search_icon{position: relative; top: -3upx; left: 0}
		.search_input{margin-left: 20upx; line-height: 40upx; width: 90%; overflow: hidden; color: #fff; font-size: 28upx;
			&::placeholder{color: #fff}
		}
	}
	.user_info{margin: 26upx 0 10upx;
		>.logo{width: 80upx; height: 80upx; border-radius: 50%; overflow: hidden}
		>.name{margin: 0 15upx; font-size: 32upx; color: #fff}
	}
	.tip_info{color: #fff;
		.city{
			>text{margin: 0 6upx; font-size: 40upx; font-weight: 600; color: #fff}
		}
		.fresh_time{}
	}
	.temp_today{height: 500upx; color: #fff;
		& .temp{position: relative;  top: 0; left: 0; font-size: 190upx;
			text{position: absolute; top: 90upx; right: 28%; font-size: 37upx}
		}
		& .air{margin: 20upx auto 0; padding: 10upx 20upx; box-sizing: border-box; width: 200upx; line-height: 30upx; border-radius:20upx; background:rgba(240, 240, 240, .2)}
	}
	.mini_code{display: block;; margin: 20upx auto; width: 200upx;}
	.author{line-height: 80upx; text-align: center; color: #fff; font-size: 22upx}
	.padding{padding: 0 $padding}
	.flex_box_left{@include flex-box(flex-start)}
	.flex_box_center{@include flex-box(center)}
	.flex_box_between{@include flex-box(space-between)}
</style>
