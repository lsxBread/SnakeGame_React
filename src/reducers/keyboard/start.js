import * as actions from '../../unit/actionType'

const initState = false;

const start = (state = initState, action) => {
  switch (action.type) {
    case actions.KEY_START:
      return action.payload;
    default:
      return state;
  }
};

export default start;
