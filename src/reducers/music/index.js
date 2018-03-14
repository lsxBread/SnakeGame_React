import * as actions from '../../unit/actionType'

const initState = false

const music = (state = initState, action) => {
  switch (action.type) {
    case actions.SWITCH_MUSIC:
      return !state
    default:
      return state
  }
}

export default music