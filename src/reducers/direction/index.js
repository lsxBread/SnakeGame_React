import * as actions from '../../unit/actionType'

const initState = 'right'

const direction = (state = initState, action) => {
  switch (action.type) {
    case actions.RESET_DIRECTION:
      return initState
    case actions.CHANGE_DIRECTION:
      return action.payload
    default:
      return state
  }
}

export default direction