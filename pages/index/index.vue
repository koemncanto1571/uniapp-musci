<template>
	<view class="content">
		<musicHead title="网易云音乐" :icon="false"></musicHead>
		<view class="container">
			<scroll-view scroll-y="true" >
				<view class="index-user">
					<view class="index-user-info">
						<view class="user-info-img">
							<image :src="userImg" mode=""></image>
						</view>
						<text>{{userName}}</text>
					</view>
					<view class="index-user-login" @click="loginHandle">
						{{loginStatus}}
					</view>
				</view>
				<view class="modal">
						<u-modal
							
							:show="show"
							:content="content"
							closeOnClickOverlay
							showCancelButton
							width="585rpx"
						>
							<u-button
								class="login-btn"
								slot="confirmButton"
								text="手机号一键登录"
								type="success"
								shape="circle"
								@click="loginConfirm"
								color="linear-gradient(to right, #ff6034, #ee0a24)"
							></u-button>
						</u-modal>
				</view>
				<view class="index-search" @tap="handleToSearch">
					<text class="iconfont icon-fangdajing"></text>
					<input type="text" value="" placeholder="搜索歌曲" />
				</view>
				<view class="index-banner">
					<u-swiper
						:list="list3"
						indicator
						indicatorMode="line"
						circular
						class='swiper'
					></u-swiper>
				</view>
				<view class="skeleton" v-if="isLoading">
				        <m-for-skeleton
				        :avatarSize="200"
						:title=false
				        :row="3"
				        :loading="isLoading"
				        isarc="square"
				        v-for="(item,key) in 4"
						:titleStyle="{}"
				        :key="key">
				        <view>asdas</view>
				        </m-for-skeleton>
				        <button type="primary" @click="hide" size="mini">隐藏</button>
				</view>
				<view class="index-list" v-else>
					<view class="index-list-item" v-for="(item,index) in topList" :key="index" @tap="handleToList(item.listId)">
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{ item.updateFrequency }}</text>
						</view>
						<view class="index-list-text">
							<view v-for="(musicItem,index) in item.tracks" :key="index">{{ index + 1}}.{{ musicItem.first }}-{{ musicItem.second }}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import "@/common/iconfont.css"
	import musicHead from "../../components/musicHead/musicHead.vue"
	import { topList } from "../../common/api.js"
	import mForSkeleton from "@/components/m-for-skeleton/m-for-skeleton";
	export default {
		data() {
			return {
				topList:[],
				isLoading:true,
				list3: [
				    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
				    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				userImg:'../../static/未登录.png',
				userName:'未登录',
				loginStatus:'立即登录',
				show:false,
				// title:'检测到该微信号未注册过云音乐账号，请尝试使用手机号进行登录',
				content:'检测到该微信号未注册过云音乐账号，请尝试使用手机号进行登录'
			}
		},
		components:{
			musicHead,
			mForSkeleton
		},
		onLoad() {
			topList().then(res=>{
				if(res.length) {
					setTimeout(()=>{
						this.topList = res
						this.isLoading = false
					},1000)
				}
			})
		},
		methods: {
			handleToList(listId) {
				uni.navigateTo({
					url:"../list/list?listId=" + listId
				})
			},
			handleToSearch(){
				uni.navigateTo({
					url:'../search/search'
				})
			},
			loginConfirm(){
				this.show = false,
				this.loginStatus = '退出登录',
				this.userImg = '../../static/头像.png'
			},
			loginHandle(){
				if(this.loginStatus === '立即登录'){
					this.show = true
				}else{
					this.loginStatus = '立即登录',
					this.userImg = '../../static/未登录.png'
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.index{}
	
	.login-btn{
		font-size: 34rpx;
		width: 300rpx;
	}
	.index-user{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 30rpx;
		.index-user-info{
			display: flex;
			align-items: center;
			.user-info-img{
				width: 65rpx;
				height: 65rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 20rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			text{
				font-size: 26rpx;
				color: #a0a0a0;
			}
		}
		.index-user-login{
			width: 140rpx;
			height: 51rpx;
			border: 1rpx solid #e4e4e4;
			border-radius: 25rpx;
			text-align: center;
			line-height: 51rpx;
			color: #000;
			font-size: 25rpx;
		}
	}
	.index-banner{
		width: 683rpx;
		height: 265rpx;
		margin: 0 auto;
		border-radius: 10rpx;
		overflow: hidden;
		.swiper{
			width: 100%;
			height: 100%;
		}
	}
	.index-search{
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 20rpx 30rpx 30rpx 30rpx;
		background: #F7F7F7;
		border-radius: 50rpx;
	}
	.index-search text{
		font-size: 26rpx;
		margin-right: 26rpx;
		margin-left: 28rpx;
	}
	.index-search input{
		font-size: 28rpx;
		flex:1
	}
	.index-list{margin: 0 30rpx;display: flex;flex-direction: column;}
	.index-list-item{display: flex; margin-bottom: 34rpx;}
	.index-list-img{width: 212rpx; height: 212rpx;position: relative; border-radius: 30rpx; overflow: hidden; margin-right: 22rpx;}
	.index-list-img image{width: 100%; height: 100%;}
	.index-list-img text{position: absolute; left: 12rpx; bottom: 16rpx; color: white; font-size: 20rpx;}
	.index-list-text{ font-size: 24rpx; line-height: 66rpx;flex:1}
</style>
