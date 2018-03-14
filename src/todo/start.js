import { startGame, deactivePause } from '../actions/index'
import store from '../store/index'
import { gameState } from '../unit/const'

const start = () => {
  if (store.getState().get('game') !== gameState.start) {
    store.dispatch(startGame())
    store.dispatch(deactivePause())
  }
}

export default start