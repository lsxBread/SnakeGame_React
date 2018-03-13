import * as actions from '../../unit/actionType'

const initState = 0

const max = (state = initState, action) => {
  switch (action.type) {
    case actions.MAX:
      return state
    default:
      return state
  }
}

export default max