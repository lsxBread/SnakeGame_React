import { combineReducers } from 'redux-immutable';
import start from './start';
import down from './down';
import left from './left';
import right from './right';
import up from './up';
import replay from './replay';
import music from './music';
import pause from './pause';

const keyboard = combineReducers({
  start,
  down,
  left,
  right,
  up,
  replay,
  music,
  pause,
});

export default keyboard;
