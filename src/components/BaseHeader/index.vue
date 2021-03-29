<template>
	<div class="base-header" :style="{height: navbarHeight + 'px'}">
    <div class="auto-top" :style="{height: capsule.top + 'px'}"></div>
    <div class="nav" :style="{height: capsule.height + 'px'}">
      <div class="base-header-back">
        <uni-icons type="arrowleft" size="20" color="#666"></uni-icons>
        <uni-icons type="homefilled" size="20" color="#666"></uni-icons>
      </div>
      <div class="base-header-title">{{title}}</div>
    </div>
	</div>
</template>

<script>
	import {uniIcons} from '@dcloudio/uni-ui'
	export default {
		name: 'BaseHeader',
		components: {uniIcons},
		props: {
			title: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
			  system: {},
        capsule: {},
        navbarHeight: '' //导航栏高度
			}
		},
    created () {
      uni.getSystemInfo({
        success: res => {
          this.system = res
          this.capsule = uni.getMenuButtonBoundingClientRect()
          this.navbarHeight = (this.capsule.top - this.system.statusBarHeight) * 2 + this.capsule.height + this.system.statusBarHeight
        }
      })

    },
    methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.base-header{
    position: fixed;
    width: 100%;
    z-index: 99;
    background-color: #4cd964;
    .auto-top{
      background-color: #f0ad4e;
    }
    .nav{
      display: flex;
      background-color: #dd524d;
      align-items: center;
    }
	}
</style>
