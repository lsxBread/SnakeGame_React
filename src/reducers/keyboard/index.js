import * as actions from '../../unit/actionType'
import immutable from 'immutable'

const $initState = immutable.Map({
  [actions.KEY_UP]: false,
  [actions.KEY_DOWN]: false,
  [actions.KEY_LEFT]: false,
  [actions.KEY_RIGHT]: false,
  [actions.KEY_SPEED]: false,
  [actions.KEY_PAUSE]: false,
  [actions.KEY_MUSIC]: false,
  [actions.KEY_REPLAY]: false,
})

const keyboard = (state = $initState, action) => {
  switch (action.type) {
    case actions.KEY_UP:
      return state.set(actions.KEY_UP, action.payload)
    case actions.KEY_LEFT:
      return state.set(actions.KEY_LEFT, action.payload)
    case actions.KEY_RIGHT:
      return state.set(actions.KEY_RIGHT, action.payload)
    case actions.KEY_DOWN:
      return state.set(actions.KEY_DOWN, action.payload)
    case actions.KEY_PAUSE:
      return state.set(actions.KEY_PAUSE, action.payload)
    case actions.KEY_MUSIC:
      return state.set(actions.KEY_MUSIC, action.payload)
    case actions.KEY_REPLAY:
      return state.set(actions.KEY_REPLAY, action.payload)
    case actions.KEY_SPEED:
      return state.set(actions.KEY_SPEED, action.payload)
    default:
      return state
  }
}

export default keyboard