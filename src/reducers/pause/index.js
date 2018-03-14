import * as actions from '../../unit/actionType'

const initState = false

const pause = (state = initState, action) => {
  switch (action.type) {
    case actions.ACTIVE_PAUSE:
      return !initState
    case actions.DEACTIVE_PAUSE:
      return initState
    default:
      return state
  }
}

export default pause