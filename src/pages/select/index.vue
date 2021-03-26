<template>
  <view class="page">
    <div class="wrap">
      <span>状态:</span>
      <div class="content">
        <base-select :value.sync="value" :range="selectOptions"></base-select>
      </div>
    </div>
    <div class="wrap">
      <span>状态(禁用):</span>
      <div class="content">
        <base-select :value.sync="value1" :range="selectOptions" :disabled="true"></base-select>
      </div>
    </div>
    <div>value: {{value}}</div>
  </view>
</template>
<script>
  import BaseSelect from '@/components/BaseSelect'

  export default {
    components: {BaseSelect},
    data () {
      return {
        value: 100,
        value1: 102,
        selectOptions: [
          {
            value: 100,
            label: '未开始',
          },
          {
            value: 101,
            label: '进行中',
          },
          {
            value: 102,
            label: '已结束'
          }
        ]
      }
    },
    onLoad () {

    },
    methods: {}
  }
</script>

<style lang="scss">
  .wrap {
    padding: 0 30rpx;
    height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;
    .content{
      flex: 1;
    }
  }
</style>
