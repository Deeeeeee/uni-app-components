<template>
  <view class="page">
<!--    <base-header></base-header>-->
    <uni-nav-bar left-icon="home" title="导航栏组件1"></uni-nav-bar>
    <uni-nav-bar left-icon="back" title="导航栏组件2"></uni-nav-bar>
    <uni-nav-bar left-icon="back" title="导航栏组件3"></uni-nav-bar>

    <div>
      1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
      1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
      1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
      1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
      1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
      1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
      1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
      1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>1 <br>
    </div>
  </view>
</template>
<script>
  import BaseHeader from '@/components/BaseHeader'
  import {uniNavBar} from '@dcloudio/uni-ui'


  export default {
    components: {BaseHeader, uniNavBar},
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
