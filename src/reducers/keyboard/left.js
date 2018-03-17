import * as actions from '../../unit/actionType'

const initState = false;

const left = (state = initState, action) => {
  switch (action.type) {
    case actions.KEY_LEFT:
      return action.payload;
    default:
      return state;
  }
};

export default left;
