<template>
	<div class="base-header">
		<div class="base-header-back">
			<uni-icons type="arrowleft" size="18" color="#666"></uni-icons>
			<uni-icons type="homefilled" size="18" color="#666"></uni-icons>
		</div>
    <div class="base-header-title">{{title}}</div>
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
			}
		},
		methods: {

		}
	}
</script>

<style>
	.base-header{
    position: fixed;
    width: 100%;
	}
</style>
