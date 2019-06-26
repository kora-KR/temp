<template>
	<view class='bgs' :style="{ top: top + 'px' }">
		<view class="title">背景</view>
		
		<scroll-view class="scroll" scroll-x="true" scroll-left="0" scroll-with-animation='true'>
			<block v-for="(item, index) in bgs" :key="index">
				<view class="scroll_view">
					<image :src=" '/static/img/bg' + index + '.jpg'" :class='["scroll_view_item", ( flagI == index ) && scroll_view_item_add]' :data-i='index' @click='handleClickChoiceBg' mode=""></image>
				</view>
			</block>
		</scroll-view>
		
		<view class="btn" @click='handleClickBtn'>确定</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				bgs: Array(2),
				flagI: '',
				scroll_view_item_add: 'scroll_view_item_add'
			};
		},
		props: {
			top: { type: String }
		},
		methods: {
			handleClickChoiceBg(e) {
				var res = e.target.dataset.i
				this.flagI = res
				this.$emit('bgChange', res)
			},
			handleClickBtn() {
				this.$emit('bgHide')
			}
		}
	}
</script>

<style lang="scss">
	@import "../static/css/default";
	
	.bgs{position: fixed; left: 0; z-index: 9999; padding: 20upx; box-sizing: border-box; width: 100%; height: auto; background: rgba(255, 255, 255, .9); text-align: center; transition: all .6s;
		.title{font-weight: 600}
		.scroll{overflow-x: scroll; width: 100%; height: 120px; @include flex-box(center); white-space: nowrap;}
		.scroll_view{position: relative; top: 0; left: 0; padding: 25upx 0; box-sizing: border-box; display: inline-block; width: 25%; height: 120px; text-align: center;
			.scroll_view_item{padding: 4upx; box-sizing: border-box; width: 100upx; height: 180upx}
		}
		.btn{margin: 0 auto; width: 20%; line-height: 50upx; border-radius: 50upx; background: rgba(0, 0, 0, .6); color: #fff; font-size: .8em;}
	}
	.scroll_view_item_add{border: 1upx solid rgba(106, 74, 101, 0.8)}
</style>
