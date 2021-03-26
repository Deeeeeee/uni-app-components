<template>
  <view class="page">
    <base-recorder></base-recorder>
  </view>
</template>
<script>
  import BaseRecorder from '@/components/BaseRecorder'

  export default {
    components: {BaseRecorder},
    data () {
      return {
        title: 'Hello'
      }
    },
    onLoad () {

    },
    methods: {}
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200 rpx;
    width: 200 rpx;
    margin: 200 rpx auto 50 rpx auto;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36 rpx;
    color: #8f8f94;
  }
</style>
