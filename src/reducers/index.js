import {combineReducers} from 'redux-immutable'
import points from './points/index'
import keyboard from './keyboard/index'

const rootReducer = combineReducers({
  points, keyboard,
})

export default rootReducer