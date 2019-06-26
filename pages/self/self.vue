<template>
	<view>
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item">
						<image :src="item.img" class='mini_code' mode="" @click="handleClickMiniCode" :data-index='index'></image>
						<view class="">{{item.txt}}</view>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		
		<view class="open_source">
			<view class="title">项目开源</view>
			
			<block v-for="(item, index) in source" :key="index">
				<view class="open_source_item">
					<view class="tip">
						<image :src="item.img" class='tip_img' mode=""></image>
						<view class="tip_txt">{{item.title}}</view>
					</view>
					<view class="address" @click='handleClickCopy' :data-v='item.add'>{{item.add}}</view>
				</view>
			</block>
		</view>
		
		<view class="open_source">
			<view class="title">Realtion ME</view>
			<block v-for="(item, index) in slefInfo" :key="index">
				<view class="open_source_item">
					<view class="tip">
						<image :src="item.img" class='tip_img' mode=""></image>
						<view class="tip_txt">{{item.title}}</view>
					</view>
					<view class="address" @click='handleClickCopy' :data-v='item.add' :data-flag='item.flag'>{{item.add}}</view>
				</view>
			</block>
		</view>
		
		<view class="open_source">
			<view class="title">鸣谢</view>
			
			<block v-for="(item, index) in plug" :key="index">
				<view class="open_source_item">
					<view class="tip">
						<image :src="item.img" class='tip_img' mode=""></image>
						<view class="tip_txt">{{item.title}}</view>
					</view>
					<view class="address">{{item.add}}</view>
				</view>
			</block>
		</view>
		
		<view class="author">开发者 · Kora</view>
	</view>
</template>

<script>
	// icon - UI
	import { uniSwiperDot } from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	
	export default {
		data() {
			return {
				info: [
					{img: '../../static/img/dlyx.jpg', txt: '大蓝营销'},
					{img: '../../static/img/xysj.jpg', txt: '信用视界'},
					{img: '../../static/img/cqq.jpg', txt: '催全球'},
					{img: '../../static/img/uni.jpg', txt: 'uni-app'}
				],
				urls: ['https://img1.91ud.com/xcximg/19/4/3/20194315220971.jpg', 'https://pic3.zhimg.com/v2-d156317df65e37f5086f4e0a2d003e87_b.jpg', 'https://img1.91ud.com/img2019/4/22/14/2019042251789537.jpg', 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/gh_33446d7f7a26_430.jpg'],
				current: 0,
				dotsStyles: {
					width: 20,
					backgroundColor: 'rgba(0, 0, 0, 1)',
					selectedBackgroundColor: 'rgba(0, 0, 0, 1)'
				},
				mode: 'long',
				source: [{title: 'gitHub', img: 'https://github.githubassets.com/images/icons/emoji/octocat.png', add: 'https://github.com/kora-KR'}, {title: '码云', img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1081188092,2818074614&fm=26&gp=0.jpg', add: 'https://gitee.com/koras'}],
				slefInfo: [{title: '电话', img: '/static/img/mobile.png', add: '17865356192', flag: 'tel'}, {title: '邮箱', img: '/static/img/email.png', add: 'keycode86@outlook.com'}],
				plug: [{title: '多端开发', img: '/static/img/logo.png', add: 'uni-app'}],
			}
		},
		components: { uniSwiperDot },
		methods: {
		   change(e) {
				this.current = e.detail.current;
			},
			handleClickMiniCode(e) {
				let res = e.target.dataset
				 uni.previewImage({
					 current: res.index,
					urls: this.urls,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success(res) {
							console.info('选中了第' + (res.tapIndex + 1) + '个按钮');
						},
						fail(res) {
							console.warn(res);
						}
					},
					// #ifdef APP-PLUS
					indicator: 'number',
					loop: true
					// #endif
				});
			},
			handleClickCopy(e) {
				console.log(2)
				var res = e.target.dataset
				res.flag == 'tel' ? 
				( uni.makePhoneCall({
						phoneNumber: '17865356192'
					}) ) : 
				( uni.setClipboardData({
					data: res.v,
					success() {
						uni.getClipboardData({
							success(res) {
								console.info(res.data);
							}
						});
					}
				}) )
			}
		}
	}
</script>

<style lang="scss">
	@import "../../static/css/default";
	
	.swiper-box{padding: 30upx 30upx 50upx; background: #fff; text-align: center; font-weight: 600;
		.swiper-item{
			>.mini_code{display: block; margin: 0 auto; width: 230upx; height: 230upx}
		}	
	}
	
	.open_source{margin: 20upx 0; padding: $padding $padding 10upx; box-sizing: border-box; background: #fff;
		>.title{font-size: 30upx; font-weight: 600; color: #5fcdfa}
		>.open_source_item{padding: 20upx 0; box-sizing: border-box; border-bottom: $border;
			.tip{@include flex-box(flex-start);
				.tip_img{margin-right: 20upx; width: 60upx; height: 60upx; border-radius: 50%;}
			}
			.address{padding-left: 80upx; box-sizing: border-box;}
			&:nth-last-of-type(1){border: none}
		}
	}
	.author{line-height: 80upx; text-align: center; color: #222; font-size: 22upx; font-weight: 600;}
</style>
