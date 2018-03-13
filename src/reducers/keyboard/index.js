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
      return state.set(actions.KEY_UP, !state.get(actions.KEY_UP))
    case actions.KEY_LEFT:
      return state.set(actions.KEY_LEFT, !state.get(actions.KEY_LEFT))
    case actions.KEY_RIGHT:
      return state.set(actions.KEY_RIGHT, !state.get(actions.KEY_RIGHT))
    case actions.KEY_DOWN:
      return state.set(actions.KEY_DOWN, !state.get(actions.KEY_DOWN))
    case actions.KEY_PAUSE:
      return state.set(actions.KEY_PAUSE, !state.get(actions.KEY_PAUSE))
    case actions.KEY_MUSIC:
      return state.set(actions.KEY_MUSIC, !state.get(actions.KEY_MUSIC))
    case actions.KEY_REPLAY:
      return state.set(actions.KEY_REPLAY, !state.get(actions.KEY_REPLAY))
    case actions.KEY_SPEED:
      return state.set(actions.KEY_SPEED, !state.get(actions.KEY_SPEED))
    default:
      return state
  }
}

export default keyboard