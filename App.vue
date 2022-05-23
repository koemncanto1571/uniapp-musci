<script>
	export default {
		onLaunch: function() {
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	.container {
		width: 100%;
		height: calc(100vh - 70px);
		margin-bottom: 15px;
	}
	.container scroll-view{
		height: 100%;
	}
	.fixbg {
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
	background-size: cover;background-position: center 0;filter: blur(30px);transform: scale(1.2);
	}
</style>
