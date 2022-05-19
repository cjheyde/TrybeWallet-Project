// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: 'inicial@inicial.com',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_USER_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  // case SET_USER:
  //   return {
  //     ...state,
  //     user: {
  //       ...state.user,
  //       email: action.payload.email,
  //       password: action.payload.password,
  //     },
  //   };
  default:
    return state;
  }
}

export default user;
