<template>
	<div class="base-header">
		<div class="back">
			<uni-icons type="arrowleft" size="18" color="#666"></uni-icons>
			<uni-icons type="homefilled" size="18" color="#666"></uni-icons>
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
				title: 'Hello'
			}
		},
		methods: {

		}
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
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
