import {
  SET_USER_EMAIL,
  SET_USER_PASSWORD,
  // SET_USER,
  CREATE_USERS_LIST,
} from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
  usersList: [],
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_USER_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  case SET_USER_PASSWORD:
    return {
      ...state,
      user: {
        ...state.user,
        password: action.password,
      },
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
  case CREATE_USERS_LIST:
    return {
      ...state,
      usersList: {
        ...state.usersList,
        user: action.user,
        // user ou eser.email?
      },
    };
  default:
    return state;
  }
}

export default userReducer;
