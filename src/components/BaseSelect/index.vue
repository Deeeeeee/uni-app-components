<template>
  <div class="base-select">
    <picker class="inner-picker"
            :value="index"
            :range="range"
            :disabled="disabled"
            :range-key="rangeKey"
            :placeholder="placeholder"
            @change="onChange">
      <div class="inner-picker-text" :style="{'text-align': align}">
        <div class="inner-picker-text-value" v-if="index !== ''">{{range[index].label}}</div>
        <div class="inner-picker-text-placeholder" v-else>{{placeholder}}</div>
      </div>
    </picker>
  </div>
</template>

<script>
  export default {
    name: 'BaseSelect',
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      range: {
        type: Array,
        required: true
      },
      rangeKey: {
        type: String,
        default: 'label'
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
        index: ''
      }
    },
    watch: {
      value: {
        handler(newVal) {
          this.range.map((item, index) => {
            if (newVal === item.value) {
              this.index = index + ''
            }
          })
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
        // console.log(e.detail.value)
        // let index = e.detail.value
        this.index = parseInt(index)
        this.$emit('change', this.range[index].value)
        this.$emit('update:value', this.range[index].value)
      }
    }
  }
</script>

<style lang="scss">
  .base-select {
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
