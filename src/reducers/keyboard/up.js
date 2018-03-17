import * as actions from '../../unit/actionType'

const initState = false;

const up = (state = initState, action) => {
  switch (action.type) {
    case actions.KEY_UP:
      return action.payload;
    default:
      return state;
  }
};

export default up;
