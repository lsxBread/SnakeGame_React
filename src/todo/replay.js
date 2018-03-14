import { deactivePause, resetSpeed, replayGame } from '../actions/index'
import store from '../store/index'
import { gameState } from '../unit/const'

const replay = () => {
  store.dispatch(resetSpeed(1))
  store.dispatch(deactivePause())
  store.dispatch(replayGame())
}

export default replay