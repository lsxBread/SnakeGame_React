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