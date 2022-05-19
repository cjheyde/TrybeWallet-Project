// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_WALLET:
    return {
      ...state,
      wallet: {
        ...state.wallet,
        currencies: action.payload.currencies,
        expenses: action.payload.expenses,
      },
    };
  default:
    return state;
  }
}

export default wallet;
