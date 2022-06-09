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
				<u-popup :show="show" mode="center"  @close="close" @open="open">
						<template v-if="loginShow">
							<view class="u-demo-block">
									<view class="u-demo-block__content">
										<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
										<!-- #ifndef APP-NVUE -->
										<u-input placeholder="输入手机号码"v-model="phone">
										<!-- #endif -->
										<!-- #ifdef APP-NVUE -->
										<u--input placeholder="输入手机号码" >
										<!-- #endif -->
											<template slot="suffix">
												<u-code
													ref="uCode"
													@change="codeChange"
													seconds="20"
													changeText="X秒重新获取"
												></u-code>
												<u-button
													@tap="getCode"
													:text="tips"
													type="success"
													size="mini"
												></u-button>
											</template>
										<!-- #ifndef APP-NVUE -->
										</u-input>
										<!-- #endif -->
										<!-- #ifdef APP-NVUE -->
										</u--input>
										<!-- #endif -->
									</view>
								</view>
								<u--input
								    placeholder="输入密码"
									type="password"
								    border="surround"
								    v-model="password"
								  ></u--input>
								<u-button type="primary" text="确定" @click="loginConfirm"></u-button>
								<u-button type="primary" text="没有账号？前往注册" @click="navToRegister"></u-button>
						</template>
				        <u--form v-else
				        				labelPosition="left"
				        				ref="form1"
				        		>
									<u--input
									    placeholder="请输入用户名"
									    border="surround"
									    v-model="nickname"
									  ></u--input>
									<view class="u-demo-block__content">
										<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
										<!-- #ifndef APP-NVUE -->
										<u-input placeholder="输入手机号码"v-model="phone">
										<!-- #endif -->
										<!-- #ifdef APP-NVUE -->
										<u--input placeholder="输入手机号码" >
										<!-- #endif -->
											<template slot="suffix">
												<u-code
													ref="uCode"
													@change="codeChange"
													seconds="20"
													changeText="X秒重新获取"
												></u-code>
												<u-button
													@tap="getCode"
													:text="tips"
													type="success"
													size="mini"
												></u-button>
											</template>
										<!-- #ifndef APP-NVUE -->
										</u-input>
										<!-- #endif -->
										<!-- #ifdef APP-NVUE -->
										</u--input>
										<!-- #endif -->
									</view>
									<u--input
									    placeholder="输入验证码"
									    border="surround"
									    v-model="code"
									  ></u--input>
									  <u--input
									      placeholder="请输入密码"
									      border="surround"
									      v-model="password"
									    ></u--input>
										<u-button type="primary" text="注册" @click="registerConfirm"></u-button>  
				        	</u--form>
				</u-popup>
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
	import { topList,login,verify,register,loginCellphone,loignOut,loignStatus,anonimous } from "../../common/api.js"
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
				content:'检测到该微信号未注册过云音乐账号，请尝试使用手机号进行登录',
				value:'',
				tips: '',
				phone:'',
				code:'',
				nickname:'',
				password:'',
				loginShow:true,
				profile:[]
			}
		},
		components:{
			musicHead,
			mForSkeleton
		},
		onLoad() {
			// anonimous().then(res=>{
			// 	console.log(res)
			// })
			loignStatus().then(res=>{
				console.log(res)
			})
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
			handleToList(listId,cookie) {
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
				loginCellphone(this.phone,this.password).then(res=>{
					console.log(res)
					this.profile = res[1].data.profile
					this.userName = res[1].data.profile.nickname
					// localStorage.setItem('token', res[1].data.cookie)
					loignStatus().then(res=>{
						console.log(res)
					})
				})
				// loignStatus().then(res=>{
				// 	console.log(res)
				// })
				this.show = false,
				this.loginStatus = '退出登录',
				this.userImg = '../../static/头像.png'
			},
			loginHandle(){
				loignOut().then(res=>{
					console.log(res)
				})
				if(this.loginStatus === '立即登录'){
					this.show = true
				}else{
					this.loginStatus = '立即登录',
					this.userImg = '../../static/未登录.png'
				}
			},
			open() {
			        // console.log('open');
			      },
			close() {
			        this.show = false
			        // console.log('close');
				},
			codeChange(text) {
			        this.tips = text;
			      },
			      getCode() {
			        if (this.$refs.uCode.canGetCode) {
			          // 模拟向后端请求验证码
					  login(this.phone).then(res=>{
						  console.log(res)
					  })
			          uni.showLoading({
			            title: '正在获取验证码'
			          })
			          setTimeout(() => {
			            uni.hideLoading();
			            // 这里此提示会被this.start()方法中的提示覆盖
			            uni.$u.toast('验证码已发送');
			            // 通知验证码组件内部开始倒计时
			            this.$refs.uCode.start();
			          }, 2000);
			        } else {
			          uni.$u.toast('倒计时结束后再发送');
			        }
			      },
				  navToRegister(){
					  this.loginShow=false
				  },
				registerConfirm(){
					register(this.phone,this.code,this.password,this.nickname).then(res=>{
						console.log(res)
					})
					this.show=false
				}
		}
	}
</script>

<style scoped lang="less">
	.u-popup__content{width: 1000rpx;}
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
