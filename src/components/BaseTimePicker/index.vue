<template>
  <div class="base-date-picker">
    <picker class="inner-picker"
            mode="date"
            :value="date"
            :start="start"
            :end="end"
            :fields="fields"
            :disabled="disabled"
            :placeholder="placeholder"
            @change="onChange">
      <div class="inner-picker-text" :style="{'text-align': align}">
        <div class="inner-picker-text-value" v-if="date !== ''">{{date}}</div>
        <div class="inner-picker-text-placeholder" v-else>{{placeholder}}</div>
      </div>
    </picker>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  export default {
    name: 'BaseSelect',
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      start: {
        type: String,
        default: ''
      },
      end: {
        type: String,
        default: ''
      },
      fields: {
        type: String,
        default: 'day'
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      align: {
        type: String,
        default: 'right'
      }
    },
    data () {
      return {
        date: ''
      }
    },
    watch: {
      value: {
        handler(newVal) {
          if(newVal){
            this.date = dayjs(newVal).format('YYYY-MM-DD')
          }
        },
        immediate: true
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      onChange (e) {
        console.log(e.detail.value)
        let date = e.detail.value
        let timestamp = dayjs(date).valueOf()
        // console.log(timestamp)
        this.date = date
        this.$emit('change', timestamp)
        this.$emit('update:value', timestamp)
      }
    }
  }
</script>

<style lang="scss">
  .base-date-picker {
    .inner-picker {
      .inner-picker-text {
        line-height: 60rpx;
        .inner-picker-text-value {
          color: #333;
        }

        .inner-picker-text-placeholder {
          color: #999;
        }
      }
    }
  }
</style>
