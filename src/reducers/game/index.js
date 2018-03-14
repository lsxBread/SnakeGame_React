import * as actions from '../../unit/actionType'
import { gameState } from '../../unit/const'

const initState = gameState.welcome

const game = (state = initState, action) => {
  switch (action.type) {
    case actions.START_GAME:
      return gameState.start
    case actions.PAUSE_GAME:
      return gameState.pause
    case actions.REPLAY_GAME:
      return gameState.welcome
    default:
      return state
  }
}

export default game