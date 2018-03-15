import {addSpeed, resetSpeed, changeDirection} from '../actions/index'
import store from '../store/index'
import { gameState } from '../unit/const'

const up = () => {
  if (store.getState().get('game') === gameState.welcome) {
    store.getState().get('speed') === 3 
    ? store.dispatch(resetSpeed(1)) 
    : store.dispatch(addSpeed())
  }
  if (store.getState().get('game') === gameState.start
      && store.getState().get('direction') !== 'down') {
    store.dispatch(changeDirection('up'))
  }
}

export default up