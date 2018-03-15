import * as actions from '../../unit/actionType'
import Immutable from 'immutable'
import {getRandomInt} from '../../unit/random'

const initState = Immutable.Map({
  left: null,
  top: null
})

const food = (state = initState, action) => {
  switch (action.type) {
    case actions.RESET_FOOD:
      return initState
    case actions.CREATE_FOOD:
      return state
              .set('left', 13 + 22 * getRandomInt(10))
              .set('top', 13 + 22 * getRandomInt(20))
    default:
      return state
  }
}
export default food