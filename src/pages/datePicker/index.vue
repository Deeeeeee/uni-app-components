<template>
  <view class="page">

    <div class="wrap">
      <span>日期:</span>
      <div class="content">
        <base-date-picker :value.sync="date"></base-date-picker>
      </div>
    </div>
    <div class="wrap">
      <span>日期(禁用):</span>
      <div class="content">
        <base-date-picker :value.sync="date2" :disabled="true"></base-date-picker>
      </div>
    </div>
    <div>value: {{date}}</div>

    <div>*传入传出都已timestamp形式</div>
  </view>
</template>
<script>
  import BaseDatePicker from '@/components/BaseDatePicker'
  const date = new Date().getTime()
  export default {
    components: {BaseDatePicker},
    data () {
      return {
        date: date,
        date2: date,
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
