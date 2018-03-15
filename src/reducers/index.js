import {combineReducers} from 'redux-immutable'
import game from './game/index'
import score from './score/index'
import keyboard from './keyboard/index'
import max from './max/index'
import speed from './speed/index'
import music from './music/index'
import pause from './pause/index'
import food from './food/index'
import direction from './direction/index'
import snake from './snake/index'

const rootReducer = combineReducers({
  game, score, max, speed, keyboard, music, pause, food, direction, snake
})

export default rootReducer