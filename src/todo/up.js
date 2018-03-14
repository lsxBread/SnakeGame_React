import {addSpeed, resetSpeed} from '../actions/index'
import store from '../store/index'
import { gameState } from '../unit/const'

const up = () => {
  if (store.getState().get('game') === gameState.welcome) {
    store.getState().get('speed') === 9 
    ? store.dispatch(resetSpeed(1)) 
    : store.dispatch(addSpeed())
  }
}

export default up