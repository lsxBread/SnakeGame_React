import { activePause, pauseGame } from '../actions/index'
import store from '../store/index'
import { gameState } from '../unit/const'

const pause = () => {
  if (store.getState().get('game') === gameState.start) {
    store.dispatch(activePause())
    store.dispatch(pauseGame())
  }
}

export default pause