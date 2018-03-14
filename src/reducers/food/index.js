import * as actions from '../../unit/actionType'
import Immutable from 'immutable'
import {getRandomInt} from '../../unit/random'

const initState = Immutable.Map({
  left: (13 + 22 * getRandomInt(10)) + 'px',
  top: (13 + 22 * getRandomInt(20)) + 'px'
})

const food = (state = initState, action) => {
  switch (action.type) {
    case actions.CREATE_FOOD:
      return state
              .set('left', (13 + 22 * getRandomInt(10)) + 'px')
              .set('top', (13 + 22 * getRandomInt(20)) + 'px')
    default:
      return state
  }
}
export default food