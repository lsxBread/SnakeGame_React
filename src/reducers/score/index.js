import * as actions from '../../unit/actionType'

const initState = 0

const score = (state = initState, action) => {
  switch (action.type) {
    case actions.SCORE:
      return state
    default:
      return state
  }
}

export default score