import store from '../store/index'
import { gameState } from '../unit/const'

const left = () => {
  if (store.getState().get('game') === gameState.start) {
    store.dispatch  
  }
}

export default left