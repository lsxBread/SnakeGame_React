import * as actions from '../../unit/actionType'

const initState = false;

const replay = (state = initState, action) => {
  switch (action.type) {
    case actions.KEY_REPLAY:
      return action.payload;
    default:
      return state;
  }
};

export default replay;
