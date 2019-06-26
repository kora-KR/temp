<template>
	<view class='warm'>
		<block v-for="(item, index) in todayInfo" :key="index">
			<view class="warms_item">
				<view class="warms_img">
					<image :src="icon + index + '.png'" class='icon_img' mode=""></image>
				</view>
				<view class="warms_info">
					<view class="title">{{( item.title.includes('em') ) ? '运动指数' : item.title}} {{item.level ? item.level : '--'}}</view>
					<view class="value">{{item.desc}}</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon: '/static/img/warms_item'
			};
		},
		props: {
			todayInfo: {
				type: Array
			}
		}
	}
</script>

<style lang="scss">
	@import "../static/css/default";
	
	.warm{padding: 0 30upx; box-sizing: border-box; background: rgba(0, 0, 0, .6); color: #fff;
		.warms_img{margin-right: 20upx; width: 128upx; height: 128upx;
			.icon_img{position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; height: 80%}
		}
		.warms_item{@include flex-box(flex-start); padding: 20upx 0; box-sizing: border-box;
			>.warms_info{flex: 1;
				>.value{line-height: 1.4; font-size: 24upx; @include ellipsis-point(2)}
			}
		}
		.warms_item:not(:nth-last-of-type(1)){border-bottom: 1upx solid #f3f3f8}
	}
</style>
