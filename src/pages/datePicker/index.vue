<template>
  <view class="page">

    <div class="wrap">
      <span>日期:</span>
      <div class="content">
        <base-date-picker :value.sync="date"></base-date-picker>
      </div>
    </div>
    <div>value1: {{date}}</div>
    <div class="wrap">
      <span>日期(禁用):</span>
      <div class="content">
        <base-date-picker :value.sync="date2" :disabled="true"></base-date-picker>
      </div>
    </div>
    <div>value2: {{date2}}</div>

    <div class="wrap">
      <span>日期时间:</span>
      <div class="content">
        <uni-datetime-picker v-model="date3" :border="false" return-type="timestamp" start="2020-12-01" end="2021-12-31"></uni-datetime-picker>
      </div>
    </div>
    <div>value3: {{date3}}</div>

    <div>*传入传出都已timestamp形式</div>
  </view>
</template>
<script>
  import BaseDatePicker from '@/components/BaseDatePicker'
  import {uniDatetimePicker} from '@dcloudio/uni-ui'

  const date = new Date().getTime()
  export default {
    components: {BaseDatePicker, uniDatetimePicker},
    data () {
      return {
        date: date,
        date2: date,
        date3: date,
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
  .page{
    background-color: #f8f8f8;
  }
  .wrap {
    padding: 0 30rpx;
    height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;
    background-color: #fff;
    .content{
      flex: 1;
    }
  }
</style>
