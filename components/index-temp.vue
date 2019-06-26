<template>
	<!-- 未来五天天气 -->
	<view class='feature_temp'>
		<view class="title">7天预报</view>
		
		<scroll-view class="scroll" scroll-x="true" scroll-left="0" scroll-with-animation='true'>
			<block v-for="(item, index) in futuretemp" :key="index">
				<view class="scroll_view">
					<view class="time">{{item.date}}</view>
					<view class="temp">{{item.tem2}}~{{item.tem1}}</view>
					<view class="state">{{item.wea}}</view>
					<view class="wind">{{item.win[0]}}{{item.win_speed}}</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return { }
		},
		props: {
			futuretemp: {
			  type: Array
			}
		}
	}
</script>

<style lang="scss">
	@import "../static/css/default";
	
	.feature_temp{background: rgba(0, 0, 0, .6); color: #fff;
		.title{line-height: 90upx; text-align: center; border-bottom: $border}
	}
	.scroll{overflow-x: scroll;width: 100%; height: 120px; @include flex-box(flex-start); white-space: nowrap;}
	.scroll_view{position: relative; top: 0; left: 0; padding: 25upx 0; box-sizing: border-box; display: inline-block; width: 25%; height: 120px; text-align: center;
		&:before{position: absolute; top: 50%; left: 0; transform: translateY(-50%); width: 2upx; height: 20%; background: #eee; content: ''}
		view{font-size: 24upx;}
		.state{margin: 10upx 0}
	}
	.scroll_view:nth-of-type(1):before{background: transparent}
</style>
