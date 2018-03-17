import { reduceSpeed, resetSpeed, changeDirection } from '../actions/index'
import store from '../store/index'
import { gameState } from '../unit/const'

const down = () => {
  if (store.getState().get('game') === gameState.start
    && store.getState().get('direction') !== 'up') {
    store.dispatch(changeDirection('down'))
  }
  if (store.getState().get('game') === gameState.welcome) {
   
    store.getState().get('speed') === 1
      ? store.dispatch(resetSpeed(3))
      : store.dispatch(reduceSpeed())
  }
}

export default down