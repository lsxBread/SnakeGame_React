import * as actions from '../../unit/actionType'

const initState = 0

const max = (state = initState, action) => {
  switch (action.type) {
    case actions.UPDATE_MAX:
      return action.payload
    default:
      return state
  }
}

export default max