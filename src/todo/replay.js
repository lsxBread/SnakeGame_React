import { deactivePause, 
         resetSpeed, 
         replayGame, 
         resetScore, 
         resetFood, 
         resetSnake, 
         resetDirection 
        } from '../actions/index'
import store from '../store/index'
import { gameState } from '../unit/const'

const replay = () => {
  store.dispatch(resetSpeed(1))
  store.dispatch(deactivePause())
  store.dispatch(replayGame())
  store.dispatch(resetScore(0))
  store.dispatch(resetFood())
  store.dispatch(resetSnake())
  store.dispatch(resetDirection())
}

export default replay