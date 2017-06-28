import {playMode} from '../common/js/config.js'
const state = {
  singer: {},
  playing: false, // 默认播放状态
  fullScreen: false, // 全屏展开,收起
  playlist: [], // 播放列表
  sequenceList: [], // 顺序列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1 // 当前索引
}
export default state