import * as actions from '../../unit/actionType'

const initState = false;

const pause = (state = initState, action) => {
  switch (action.type) {
    case actions.KEY_PAUSE:
      return action.payload;
    default:
      return state;
  }
};

export default pause;
