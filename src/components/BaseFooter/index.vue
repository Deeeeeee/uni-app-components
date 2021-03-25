<template>
  <div class="base-recorder">
    <button v-if="!voice.tempFilePath" @touchstart="onTouchStart" @touchend="onTouchEnd">
      <span>长按录音</span>
      <span v-if="isRecording">Recording...</span>
    </button>
    <template v-else>
      <button @click="playVoice" :disabled="isPlaying">
        <span>播放录音</span>
        <span>{{(voice.duration / 1000).toFixed(1)}}s</span>
        <span v-if="isPlaying">Playing...</span>
      </button>
      <button @click="clear">清除录音</button>
    </template>
  </div>
</template>

<script>
  import {uniIcons} from '@dcloudio/uni-ui'

  const RecorderManager = uni.getRecorderManager();
  const InnerAudioContext = uni.createInnerAudioContext();
  export default {
    name: 'BaseRecorder',
    components: {uniIcons},
    props: {
      path: {
        type: String,
        default: ''
      },
      size: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        isPlaying: false,
        isRecording: false,
        touchStartTime: 0,
        touchEndTime: 0,
        pressTime: 0,
        voicePath: '',
        voice: {
          tempFilePath: '',
          fileSize: 0,
          duration: 0
        }
      }
    },
    created () {
      this.voice.tempFilePath = this.path
      this.voice.fileSize = this.size
      this.voice.duration = this.duration
    },
    mounted () {
      RecorderManager.onStop((res) => {
        console.log(this.pressTime)
        if (this.pressTime < 1000) {
          uni.showToast({title: '录制时间太短', icon: 'none'})
          this.resetTime()
        } else {
          console.log('recorder stop' + JSON.stringify(res))
          this.voice.tempFilePath = res.tempFilePath
          this.voice.fileSize = res.fileSize
          this.voice.duration = res.duration
          InnerAudioContext.src = res.tempFilePath
          this.$emit('recordFinish', this.voice)
        }
      })
      InnerAudioContext.onEnded(() => {
        this.isPlaying = false
      })
    },
    methods: {
      onTouchStart () {
        let _this = this
        uni.authorize({
          scope: 'scope.record',
          success () {
            console.log('录音授权成功');
            _this.isRecording = true
            _this.touchStartTime = new Date().getTime()
            console.log(_this.touchStartTime)
            _this.startRecord()
          },
          fail () {
            wx.showModal({  //====> 授权
              title: '提示',
              content: '您未授权录音，功能将无法使用',
              showCancel: true,
              confirmText: '授权',
              success: function (res) {
                if (res.confirm) {
                  wx.openSetting({
                    success: (res) => {
                      // console.log(res.authSetting);
                      // if (!res.authSetting['scope.record']) {
                      // }
                    }
                  })
                }
              }
            })
          }
        })
      },
      onTouchEnd () {
        setTimeout(() => {
          this.isRecording = false
          this.touchEndTime = new Date().getTime()
          console.log(this.touchEndTime)
          console.log(this.touchEndTime - this.touchStartTime)
          this.pressTime = this.touchEndTime - this.touchStartTime
          this.endRecord()
        }, 500)
      },
      startRecord () {
        console.log('开始录音')
        RecorderManager.start()
      },
      endRecord () {
        console.log('录音结束')
        RecorderManager.stop()
      },
      playVoice () {
        console.log('播放录音')
        if (this.voice.tempFilePath) {
          InnerAudioContext.play()
          this.isPlaying = true
        }
      },
      resetTime () {
        this.touchStartTime = 0
        this.touchEndTime = 0
        this.pressTime = 0
      },
      clear () {
        this.voice.tempFilePath = ''
        this.voice.fileSize = 0
        this.voice.duration = 0
        this.resetTime()
      }
    }
  }
</script>

<style lang="scss">
  .base-recorder {

  }
</style>
