import * as actions from '../../unit/actionType'

const initState = 0

const score = (state = initState, action) => {
  switch (action.type) {
    case actions.RESET_SCORE:
      return initState
    case actions.ADD_SCORE:
      return state + 1
    default:
      return state
  }
}

export default score