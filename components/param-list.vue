<template>
	<view class="param_list">
		<block v-for="(item, index) in todayParam" :key="index">
			<view class="param_list_item">
				<view class="title">{{item.title}}</view>
				<view class="value">{{item.value}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return { };
		},
		props: {
			todayParam: {
				type: Array
			}
		}
	}
</script>

<style lang="scss">
	@import "../static/css/default";
	
	.param_list{@include flex-box(flex-start); flex-wrap: wrap; margin: 20upx 0; background: rgba(0, 0, 0, .6); color: #fff;
		.param_list_item{padding: 16upx 0; width: 25%; text-align: center; box-sizing: border-box;
			>.title{font-size: 24upx;}
			>.value{font-size: 25upx;}
		}
		.param_list_item:not(:nth-of-type(4n)){border-right: $border}
		.param_list_item:nth-of-type(n + 5){border-top: $border}
	}
</style>
