import { changeDirection } from '../actions/index'
import store from '../store/index'
import { gameState } from '../unit/const'

const left = () => {
  console.log('left')
  if (store.getState().get('game') === gameState.start
      && store.getState().get('direction') !== 'right') {
    store.dispatch(changeDirection('left'))  
  }
}

export default left