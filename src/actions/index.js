import * as actions from '../unit/actionType'
export const buttonDown = (btnType) => {
  return {
    type: btnType,
    payload: true
  }
}

export const buttonUp = (btnType) => {
  return {
    type: btnType,
    payload: false
  }
}

export const addSpeed = () => {
  return {
    type: actions.ADD_SPEED
  }
}

export const reduceSpeed = () => {
  return {
    type: actions.REDUCE_SPEED
  }
}

export const resetSpeed = (number) => {
  return {
    type: actions.RESET_SPEED,
    payload: number
  }
}

export const startGame = () => {
  return {
    type: actions.START_GAME
  }
}

export const pauseGame = () => {
  return {
    type: actions.PAUSE_GAME
  }
}

export const replayGame = () => {
  return {
    type: actions.REPLAY_GAME
  }
}

export const gameover = () => {
  return {
    type: actions.GAME_OVER
  }
}

export const switchMusic = () => {
  return {
    type: actions.SWITCH_MUSIC
  }
}

export const activePause = () => {
  return {
    type: actions.ACTIVE_PAUSE
  }
}

export const deactivePause = () => {
  return {
    type: actions.DEACTIVE_PAUSE
  } 
}

export const createFood = () => {
  return {
    type: actions.CREATE_FOOD
  }
}

export const createSnake = () => {
  return {
    type: actions.CREATE_SNAKE
  }
}

export const moveSnake = (newPos) => {
  return {
    type: actions.MOVE_SNAKE,
    payload: newPos
  }
}

export const changeDirection = (dir) => {
  return {
    type: actions.CHANGE_DIRECTION,
    payload: dir,
  }
}

export const addScore = () => {
  return {
    type: actions.ADD_SCORE
  }
}

export const resetScore = (dir) => {
  return {
    type: actions.RESET_SCORE
  }
}

export const resetFood = (dir) => {
  return {
    type: actions.RESET_FOOD
  }
}

export const resetSnake = (dir) => {
  return {
    type: actions.RESET_SNAKE
  }
}

export const resetDirection = (dir) => {
  return {
    type: actions.RESET_DIRECTION
  }
}

export const updateMax = (score) => {
  return {
    type: actions.UPDATE_MAX,
    payload: score
  }
}