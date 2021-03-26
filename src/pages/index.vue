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
            description: '长按录音',
            path: '/pages/recorder/index',
          },
          {
            name: 'BaseSelect',
            // description: '录音&播放组件',
            path: '/pages/select/index',
          },
          {
            name: 'BaseTimePicker',
            description: '时间选择',
            path: '/pages/timePicker/index',
          },
          {
            name: 'BaseDatePicker',
            description: '日期选择',
            path: '/pages/datePicker/index',
          },
          {
            name: 'BaseHeader',
            description: '自定义头部',
            path: '/pages/header/index',
          },
          {
            name: 'BaseFooter',
            description: '底部按钮自适应',
            path: '/pages/footer/index',
          },
          {
            name: 'BaseStep',
            description: '步骤条',
            path: '/pages/step/index',
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
