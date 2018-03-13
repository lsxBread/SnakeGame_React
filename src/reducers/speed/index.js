import * as actions from '../../unit/actionType'

const initState = 1

const speed = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_SPEED:
      return state + 1
    case actions.RESET_SPEED:
      return 1
    default:
      return state
  }
}

export default speed