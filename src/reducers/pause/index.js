import * as actions from '../../unit/actionType'

const initState = false

const pause = (state = initState, action) => {
  switch (action.type) {
    case actions.PAUSE:
      return state
    default:
      return state
  }
}

export default pause