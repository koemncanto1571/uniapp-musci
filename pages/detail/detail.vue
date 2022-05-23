<template>
	<view class="detail">
		<view class="fixbg" :style="{ 'background-image':'url('+songDetail.al.picUrl+')'}"></view>
		<musicHead :title="songDetail.name" :icon="true" color="white"></musicHead>
		<view class="container" v-show='!isloading'>
			<scroll-view scroll-y="true" >
				<view class="detail-play" @tap="handleToPlay">
					<image :src="songDetail.al.picUrl" mode="" :class="{'detail-play-run' : isPlayRotate}"></image>
					<text class="iconfont " :class="iconPlay"></text>
					<view :class="[needleClass]">
					</view>
				</view>
				<view class="detail-lyric">
					<view class="detail-lyric-wrap" :style="{ transform : 'translateY('+ -(lyricIndex - 1) * 82 +'rpx)'}">
						<view class="detail-lyric-item" :class="{active : lyricIndex == index}" v-for="(item,index) in songLyric" :key='index'>
							{{ item.lyric}}
						</view>
					</view>
				</view>
				<view class="detail-like">
					<view class="detail-like-head">
						喜欢这首歌的人也听
					</view>
					<view class="detail-like-item" v-for="(item,index) in songSimi" :key='index' @tap="handleToSimi(item.id)">
						<view class="detail-like-img">
							<image :src="item.album.picUrl" mode=""></image>
						</view>
						<view class="detail-like-song">
							<view class="">
								{{item.name}}
							</view>
							<view class="">
								<image v-if="item.privilege.flag > 60 && item.privilege.flag < 70" src="../../static/yuanchang.png" mode=""></image>
								<image v-if="item.privilege.maxbr == 999000" src="../../static/sq.png" mode=""></image>
								{{ item.album.artists[0].name }} - {{item.name}}
							</view>
						</view>
						<text class="iconfont icon-bofang"></text>
					</view>
				</view>
				<view class="detail-comment">
					<view class="detail-comment-head">
						精彩评论
					</view>
					<view class="detail-comment-item" v-for="(item,index) in songComment" :key='index'>
						<view class="detail-comment-img">
							<image :src="item.user.avatarUrl" mode=""></image>
						</view>
						<view class="detail-comment-content">
							<view class="detail-comment-title">
								<view class="detail-comment-name">
									<view class="">{{ item.user.nickname }}</view>
									<view class="">{{ formatTime(item.time)}}</view>
								</view>
								<view class="detail-comment-like">
									{{formatCount(item.likedCount)}} <text class="iconfont icon-dianzan"></text>
								</view>
							</view>
							<view class="detail-comment-text">
								{{item.content}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import '@/common/iconfont.css'
	import musicHead from "../../components/musicHead/musicHead.vue"
	import { songDetail,songSimi,songComment,songLyric,songUrl} from "../../common/api.js"
	export default {
		data() {
			return {
				songDetail:{
					al:{
						picUrl:''
					}
				},
				songSimi:[],
				songComment:[],
				songLyric:[],
				lyricIndex:0,
				iconPlay:'icon-zanting',
				isPlayRotate:true,
				needleClass:'detail-play-run2',
				isloading:true
			}
		},
		components:{
			musicHead
		},
		onLoad(option) {
			// console.log(option.songId)
			this.getMusic(option.songId)
		},
		onUnload() {
			this.cancelLyricIndex()
			// #ifdef H5
			this.bgAudioMannager.destroy()
			// #endif
			
		},
		onHide() {
			this.cancelLyricIndex()
			// #ifdef H5
			this.bgAudioMannager.destroy()
			// #endif
		},
		methods: { 
			getMusic(songId){
				this.$store.commit('NEXT_ID',songId)
				uni.showLoading({
					title:'加载中....'
				})
				this.isloading = true
				Promise.all([ songDetail(songId) , songSimi(songId), songComment(songId),songLyric(songId),songUrl(songId) ]).then((res)=>{
					if(res[0][1].data.code == '200'){
						this.songDetail = res[0][1].data.songs[0]
					}
					if( res[1][1].data.code == '200'){
						this.songSimi = res[1][1].data.songs
						// console.log(res)
					}
					if(res[2][1].data.code == '200') {
						this.songComment = res[2][1].data.hotComments
					}
					if(res[3][1].data.code == '200'){
						let lyric = res[3][1].data.lrc.lyric
						// console.log(lyric)
						let re = /\[([^\]]+)\]([^\[]+)/g
						// console.log( lyric.match(re))
						var result = []
						lyric.replace(re,($0,$1,$2)=>{
							result.push({"time":this.formatTimeToSec($1),"lyric":$2})
						})
						// console.log(result)
						this.songLyric = result
					}
					if(res[4][1].data.code == '200'){
						// #ifdef MP
						this.bgAudioMannager = uni.getBackgroundAudioManager()
						this.bgAudioMannager.title = this.songDetail.name
						// #endif
						
						// #ifdef H5
						if(!this.bgAudioMannager){
							this.bgAudioMannager = uni.createInnerAudioContext()
						}
						this.iconPlay = 'icon-bofang1'
						this.isPlayRotate = false
						// #endif
						this.bgAudioMannager.src = res[4][1].data.data[0].url || ''
						this.listenLyricIndex()
						this.bgAudioMannager.onPlay(()=>{
							this.listenLyricIndex()
							this.iconPlay = 'icon-zanting'
							this.isPlayRotate = true
							this.needleClass = 'detail-play-run3'
							
							// this.$refs.playState.classList.remove('detail-play-run2-state')
						})
						this.bgAudioMannager.onPause(()=>{
							this.cancelLyricIndex()
							this.iconPlay = 'icon-bofang1'
							this.isPlayRotate = false
							this.needleClass = 'detail-play-run2'
							
							// this.$refs.playState.classList.add('detail-play-run2-state')
							// this.$refs.playState.classList.remove('detail-play-run3-state')
						})
						this.bgAudioMannager.onEnded(()=>{
							this.getMusic(this.$store.state.nextId)
						})
					}
					this.isloading = false
					uni.hideLoading()
				})
			},
			formatTimeToSec(val) {
				let arr = val.split(':')
				return  (parseFloat(arr[0]*60) + parseFloat(arr[1])).toFixed(1)
			},
			handleToPlay() {
				if( this.bgAudioMannager.paused) {
					this.bgAudioMannager.play()
				}
				else {
					this.bgAudioMannager.pause()
				}
			},
			listenLyricIndex() {
				clearInterval(this.timer)
				this.timer = setInterval(()=>{
					for(var i =0;i<this.songLyric.length;i++) {
						if(this.bgAudioMannager.currentTime > this.songLyric[this.songLyric.length-1].time){
							this.lyricIndex = this.songLyric.length-1
							break
						}
						if(this.bgAudioMannager.currentTime > this.songLyric[i].time && this.bgAudioMannager.currentTime < this.songLyric[i+1].time){
							this.lyricIndex = i
						}
					}
					console.log(this.songLyric[this.lyricIndex].lyric)
				},50)
			},
			cancelLyricIndex() {
				clearInterval(this.timer)
			},
			handleToSimi(songId) {
				this.getMusic(songId)
			}
		},
		computed:{
					formatCount:function(){
						return function(val) {
							if(val >= 10000 && val <= 100000000) {
									 val /= 10000;
									 return val.toFixed(1) + '万'
								}
								else if( val > 100000000){
									val /= 100000000
									return val.toFixed(1) + '亿'
								}
								else {
									return val
								}
						}
		},
		formatTime:function() {
			return function(val) {
				var date = new Date(val)
				return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
			}
		}
				}
	}
</script>

<style scoped>
	.detail-play{ width: 580rpx; height: 580rpx; background: url(../../static/disc.png); background-size: cover;margin: 214rpx auto 0 auto;position: relative;}
	.detail-play image{width: 370rpx; height: 370rpx;border-radius: 50%;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;animation: 10s linear move infinite;animation-play-state: paused;}
	.detail-play .detail-play-run{ animation-play-state: running;}
	@keyframes move{
		from{ transform: rotate(0deg);}
		to{transform: rotate(360deg);}
	}
	@keyframes move2{
		100%{
			transform: rotateZ(-20deg);
		}
	}
	@keyframes move3{
		0%{
			transform: rotateZ(-20deg);
		}
		100%{
			transform: rotateZ(0deg);
		}
	}
	.detail-play text{font-size: 100rpx; color: white;width: 100rpx; height: 100rpx;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;}
	.detail-play .detail-play-run2{width: 230rpx;height: 360rpx; background: url(../../static/needle.png);position: absolute;left: 110rpx;right: 0;background-size: cover;top: -200rpx;margin: auto;animation: move2 1s normal forwards ;transform-origin: left top;animation-play-state: running;}
	.detail-play .detail-play-run3{width: 230rpx;height: 360rpx; background: url(../../static/needle.png);position: absolute;left: 110rpx;right: 0;background-size: cover;top: -200rpx;margin: auto;animation: move3 1s normal forwards ;transform-origin: left top;animation-play-state: running;}
	.detail-play .detail-play-run2-state{animation-play-state: running;}
	.detail-play .detail-play-run3-state{animation-play-state: running;}
	.detail-lyric{font-size: 32rpx;line-height: 82rpx;height: 246rpx;text-align: center;overflow: hidden;color: #6f6e73;}
	.detail-lyric-wrap{transition: .5s;}
	.detail-lyric-item{height: 82rpx;}
	.detail-lyric-item.active{color: white;}
	
	.detail-like{margin: 0 30rpx;}
	.detail-like-head{font-size: 36rpx;color: white;margin: 50rpx 0;}
	.detail-like-item{display: flex;align-items: center;margin-bottom: 28rpx;}
	.detail-like-item text{font-size: 50rpx;color: #C6C2BF;}
	.detail-like-img{width: 82rpx; height: 82rpx;border-radius: 20rpx;overflow: hidden;margin-right: 20rpx;}
	.detail-like-img image{width: 100%;height: 100%;}
	.detail-like-song{flex: 1;color: #c6c2bf;}
	.detail-like-song view:nth-child(1){font-size: 28rpx;color:white;margin-bottom: 12rpx;}
	.detail-like-song view:nth-child(2){font-size: 22rpx;}
	.detail-like-song image{width: 26rpx;height:20rpx ;margin-right: 10rpx;}
	
	.detail-comment{margin: 0 30rpx;}
	.detail-comment-head{font-size: 36rpx;color: white;margin: 50rpx 0;}
	.detail-comment-item{margin-bottom: 22rpx;display: flex;}
	.detail-comment-img{width: 64rpx;height: 64rpx;border-radius: 50%; overflow: hidden;margin-right: 18rpx;}
	.detail-comment-img image{width: 100%;height: 100%;}
	.detail-comment-content{flex: 1;color: #cbcacf;}
	.detail-comment-title{display: flex;justify-content: space-between;}
	.detail-comment-name{}
	.detail-comment-name view:nth-child(1){font-size: 26rpx;}
	.detail-comment-name view:nth-child(2){font-size: 18rpx;color: #ffffff;}
	.detail-comment-like{font-size: 28rpx;}
	.detail-comment-text{font-size: 28rpx;line-height: 40rpx;color: white;margin-top: 20rpx;border-bottom: 1rpx #e0e0e0 solid; padding-bottom: 40rpx;}
</style>
