import { startGame, deactivePause, createFood, createSnake } from '../actions/index'
import store from '../store/index'
import { gameState } from '../unit/const'

const start = () => {
  if (store.getState().get('game') === gameState.welcome
     || store.getState().get('game') === gameState.pause) {
       
    if (store.getState().get('game') !== gameState.pause) {
      store.dispatch(createFood())
      store.dispatch(createSnake())
    }
    store.dispatch(startGame())
    store.dispatch(deactivePause())
  }
}

export default start