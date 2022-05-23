<template>
	<view class="music-head" :style="{color:color}">
		<view v-if="icon" class="music-head-icon" :class="{'music-head-black' : iconBlack}">
			<text class="iconfont icon-zuojiantou-copy" @tap="handleToBack"></text> | <text class="iconfont icon-shouye" @tap="handleToHome"></text>
		</view>
		{{ title }}
	</view>
</template>

<script>
	export default {
		name:"musicHead",
		data() {
			return {
				
			};
		},
		props:["title","icon","color","iconBlack"],
		methods:{
			handleToBack() {
				uni.navigateBack()
			},
			handleToHome() {
				uni.navigateTo({
					url:"../../pages/index/index"
				})
			}
		}
	}
</script>

<style scoped>
	.music-head {
		width: 100%;
		height: 75px;
		font-size: 16px;
		line-height: 80px;
		padding-top: 25px;
		text-align: center;
		color: #000000;
		position: relative;
	}
	.music-head-icon{
		position: absolute;
		left: 8px;
		top: 26px;
		width: 90px;
		height: 31px;
		margin-top: 22px;
		background: rgba(0,0,0,0.4);
		line-height: 31px;
		color: white;
		border-radius: 15px;
		display: flex;
		justify-content: space-evenly;
	}
	.music-head-black{
		color: black;
		border: 1px #eaeaea solid;
		background: white;
	}
</style>
