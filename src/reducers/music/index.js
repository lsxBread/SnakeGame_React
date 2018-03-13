import * as actions from '../../unit/actionType'

const initState = false

const music = (state = initState, action) => {
  switch (action.type) {
    case actions.MUSIC:
      return state
    default:
      return state
  }
}

export default music