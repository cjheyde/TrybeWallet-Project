// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CREATE_USER } from '../actions';

const INITIAL_STATE = {
  user: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_USER:
    return { ...state,
      user: {
        ...state.user,
        name: action.payload.name,
      },
    };
  default:
    return state;
  }
}

export default userReducer;

// se o initial state = {} => return {...state, state_model: action.value};
// se initial state = [] => return [...state, state_model: action.value];
