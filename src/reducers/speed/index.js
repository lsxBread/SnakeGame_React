import * as actions from '../../unit/actionType'

const initState = 1

const speed = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_SPEED:
      return state + 1
    case actions.REDUCE_SPEED:
      return state - 1
    case actions.RESET_SPEED:
      return action.payload
    default:
      return state
  }
}

export default speed