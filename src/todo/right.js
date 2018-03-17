import { changeDirection } from '../actions/index'
import store from '../store/index'
import { gameState } from '../unit/const'

const right = () => {
  console.log('right')
  if (store.getState().get('game') === gameState.start
      && store.getState().get('direction') !== 'left') {
    store.dispatch(changeDirection('right'))  
  }
}

export default right