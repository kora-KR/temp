<template>
	<view class="base-wrap" :style="{height:getHeight}">
		<view class="title" :style="{fontSize:getTitleFontSize,color:getTitleColor,height:getTitleHeight,background:getTitleBackground,paddingLeft:getTitlePadding}">{{getTitle}}</view>
		<view class="panel" :style={padding:getContentPadding}>
			<text v-for="(item,index) in getData" :key="index" class="item" :style="{width:getItemWidth,height:getItemHeight,fontSize:getItemFontSize,border:getItemBorder,borderRadius:getItemBorderRadius,marginTop:getItemMarginTop,color:getItemColor,background:getItemBackgroundColor}" @click="chooseItem(item)">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			classesAttr: {
				type: Object,
				default: {}
			}
		},
		computed: {
			getData() {
				return this.classesAttr.data || []
			},
			getTitle() {
				return this.classesAttr.title || '模块标题'
			},
			getTitleColor() {
				return this.classesAttr.titleColor || '#333'
			},
			getTitleFontSize() {
				return uni.upx2px(this.classesAttr.titleFontSize || 24) + 'px'
			},
			getTitleHeight() {
				return uni.upx2px(this.classesAttr.titleHeight || 60) + 'px'
			},
			getTitleBackground() {
				return this.classesAttr.titleBackground || '#ccc'
			},
			getTitlePadding() {
				return uni.upx2px(this.classesAttr.titlePadding ||20) + 'px'
			},
			getHeight() {
				return uni.upx2px(this.classesAttr.height || 350) + 'px'
			},
			getContentPadding() {
				return  0 + ' ' + uni.upx2px(this.classesAttr.contentPadding || 20) + 'px'
			},
			getItemWidth() {
				return uni.upx2px(this.classesAttr.itemWidth || 200) + 'px'
			},
			getItemHeight() {
				return uni.upx2px(this.classesAttr.itemHeight || 50) + 'px'
			},
			getItemFontSize() {
				return uni.upx2px(this.classesAttr.itemFontSize || 28) + 'px'
			},
			getItemColor() {
				return this.classesAttr.itemColor || '#333'
			},
			getItemBackgroundColor() {
				return this.classesAttr.itemBackgroundColor || ''
			},
			getItemBorder() {
				return this.classesAttr.itemBorder || '1px solid rgba(0, 0, 0, 0.1)'
			},
			getItemBorderRadius() {
				return uni.upx2px(this.classesAttr.itemBorderRadius || 20) + 'px'
			},
			getItemMarginTop() {
				return uni.upx2px(this.classesAttr.itemMarginTop || 20) + 'px'
			}
		},
		methods:{
			chooseItem(item) {
				this.$emit('chooseItem',item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.base-wrap {
		overflow: hidden;
		.title {
			display: flex;
			align-items: center;
			box-sizing: border-box;
		}

		.panel {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			text-align: justify;
			.item {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 200upx;
			}

			&::after {
				display: block;
				content: '';
				width: 200upx;
				border: 1px solid transparent;
			}
		}
	}
</style>
