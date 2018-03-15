import * as actions from '../../unit/actionType'
import Immutable from 'immutable'
import { getRandomInt } from '../../unit/random'

const initState = Immutable.List.of(
  Immutable.Map({
    left: null,
    top: null,
  }),
  Immutable.Map({
    left: null,
    top: null,
  })
)

let leftPos, topPos
const snake = (state = initState, action) => {
  switch (action.type) {
    case actions.RESET_SNAKE:
      return initState
    case actions.CREATE_SNAKE:
      leftPos = getRandomInt(10)
      if (leftPos === 0) {
        leftPos = 1
      }
      topPos = getRandomInt(20)
      return state.set(0, Immutable.Map({
                left: (13 + 22 * leftPos),
                top: (13 + 22 * topPos)
              })).set(1, Immutable.Map({
                left: (13 + 22 * (leftPos - 1)),
                top: (13 + 22 * topPos)
              }))
    case actions.MOVE_SNAKE:
      return action.payload
    default:
      return state
  }
}

export default snake