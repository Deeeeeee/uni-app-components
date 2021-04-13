<template>
  <view class="base-footer">
    <view class="content">
      <slot />
    </view>
    <view class="safe-area" />
  </view>
</template>

<script>
  export default {
    name: 'BaseFooter',
    props: {
      customClass: {
        type: String,
        defaut: ''
      }
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .base-footer{
    position: fixed;
    box-sizing: border-box;
    padding: 20rpx 20rpx;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 9;
    box-shadow: 0 0 10rpx rgba(0,0,0,.2);
    background-color: #fff;
    .content{
      display: flex;
    }
    .safe-area{
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
</style>
