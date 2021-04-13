<template>
  <view class="page">
    <base-footer>
      <button class="button" type="primary" size="large">确认</button>
    </base-footer>
  </view>
</template>
<script>
  import BaseFooter from '@/components/BaseFooter'

  export default {
    components: {BaseFooter},
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
 .button{
   width: 100%;
 }
</style>
