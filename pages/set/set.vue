<template>
	<view class="main">
		<image class='ing' src="/static/img/ing.png" mode="widthFix"></image>
		<view>开发中</view>
		<view>尽情期待</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.main{position: fixed; top: 30%; left: 50%; transform: translate(-50%, -50%); text-align: center; font-weight: 600; text-shadow: 0 4px 5px #222, 0px -2px 1px #fff;}
	.ing{width: 200upx; animation: jump 1s infinite linear;}
	@keyframes jump{
		0%{transform: translate(0px, 0px)}
		50%{transform: translate(0px, -10px)}
		100%{transform: translate(0px, 0px)}
	}
</style>
