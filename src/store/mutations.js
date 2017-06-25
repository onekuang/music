import * as types from './mutation-types.js'
const matations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default matations