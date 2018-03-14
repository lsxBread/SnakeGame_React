import {switchMusic } from '../actions/index'
import store from '../store/index'

const music = () => {
  store.dispatch(switchMusic())
}

export default music