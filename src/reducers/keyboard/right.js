import * as actions from '../../unit/actionType'

const initState = false;

const right = (state = initState, action) => {
  switch (action.type) {
    case actions.KEY_RIGHT:
      return action.payload;
    default:
      return state;
  }
};

export default right;
