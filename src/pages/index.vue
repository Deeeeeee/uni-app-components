<template>
	<view class="page">
		<ul>
			<li v-for="(item,index) in list" :key="index">
				<navigator :url="item.path">【{{item.name}}】 <span v-if="item.description">{{item.description}}</span></navigator>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
          {
            name: 'BaseRecorder',
            description: '录音&播放组件',
            path: '/pages/recorder/index',
          }
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
  .page{
    ul{
      li{
        line-height: 100rpx;
        border-bottom: 1px solid #e8e8e8;
        span{
          margin-left: 10rpx;
          color: #999;
          font-size: 24rpx;
        }
      }
    }
  }

</style>
