<template>
	<view class='control'>
		<image src="/static/img/menu.png" :class='["menu", rotate]' mode="" @click='handClickMenu'></image>
		<view class='control_all' :class='[translate]'>
			<block v-for="(item, index) in controlAll" :key="index">
				<button type="default" open-type='share' v-if='index == 0' @click='handleClickControlItem' :data-flag='item.flag'>
					<image :src="item.img" class='control_icon'></image>
				</button>
				<image v-else :src="item.img" class='control_icon' @click='handleClickControlItem' :data-flag='item.flag'></image>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				controlAll: [
					{img: '/static/img/share.png', flag: 'share'},
					{img: '/static/img/setting.png', flag: 'set'},
					{img: '/static/img/location.png', flag: 'city'},
					{img: '/static/img/info.png', flag: 'self'}
				],
				controlShow: false,
				rotate: '',
				translate: 'translateR'
			};
		},
		methods: {
			handClickMenu() {
				this.controlShow = !this.controlShow
				this.rotate = ( this.rotate == 'rotateL' ) ? 'rotateR' : 'rotateL'
				this.translate = ( this.translate == 'translateL' ) ? 'translateR' : 'translateL'
			},
			handleClickControlItem(e) {
				var flag = e.target.dataset.flag
				this.translate = 'translateR'
				flag != 'share' && ( 
				uni.navigateTo({
					url: '/pages/' + flag + '/' + flag
				}) )
			}
		}
	}
</script>

<style lang="scss">
	@import "../static/css/default";
	
	$iconSize: 80upx;
	.control{position: fixed; bottom: 50upx; right: 50upx; z-index: 9999; width: $iconSize; height: $iconSize; border-radius: 50%; background: rgba(106,74,101, 1);
		.control_all{position: absolute; left: 0; z-index: 888; box-sizing: border-box; width: 100; border-radius: 100upx; background: #fff linear-gradient(to bottom, rgba(106,74,101, .2), rgba(106,74,101, .6)); overflow: hidden; transition: all .6s;
			.control_icon{width: $iconSize; height: $iconSize}
		}
		>.menu{position: absolute; top: 0; left: 0; z-index: 999; width: $iconSize; height: $iconSize; transition: all .6s;}
	}
	
	.rotateL{transform: rotate(-180deg)}
	.rotateR{transform: rotate(0deg)}
	// 如上对应同步
	.translateL{top: -370upx; height: 450upx; opacity: 1;}
	.translateR{top: 0; height: 0; opacity: 0;}
	
	button{line-height: 1.8!important; padding-left: 0!important; padding-right: 0!important; background-color: transparent!important;}
	button::after{background-color: transparent; border: none!important}
</style>
