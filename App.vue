<script>
	export default {
		onLaunch () {
			console.log('App Launch')
		},
		onShow () {
			console.log('App Show')
		},
		onHide () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	
	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
	
</style>
