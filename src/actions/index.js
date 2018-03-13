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

export const resetSpeed = () => {
  return {
    type: actions.RESET_SPEED
  }
}