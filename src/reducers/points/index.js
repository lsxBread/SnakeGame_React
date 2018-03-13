import * as actions from '../../unit/actionType'

const initState = 0

const points = (state = initState, action) => {
  switch (action.type) {
    case actions.POINTS:
      return state
    default:
      return state
  }
}

export default points