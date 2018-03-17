import * as actions from '../../unit/actionType'

const initState = false;

const music = (state = initState, action) => {
  switch (action.type) {
    case actions.KEY_MUSIC:
      return action.payload;
    default:
      return state;
  }
};

export default music;
