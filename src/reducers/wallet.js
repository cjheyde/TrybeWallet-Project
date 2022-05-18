// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CREATE_WALLET } from '../actions';

const INITIAL_STATE = {
  wallet: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_WALLET:
    return { ...state, wallet: action.payload.wallet };
  default:
    return state;
  }
}

export default walletReducer;

// se o initial state = {} => return {...state, state_model: action.value};
// se initial state = [] => return [...state, state_model: action.value];
