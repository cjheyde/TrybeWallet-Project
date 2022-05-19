// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { SET_WALLET } from '../actions/index';
import { FETCH_CURRENCY_SUCCESS } from '../actions/index';

const INITIAL_STATE = {
  currencies: ['USD', 'EUR'],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CURRENCY_SUCCESS:
    return {
      ...state,
      wallet: {
        ...state.wallet,
        currencies: action.currencies,
      },
    };
  default:
    return state;
  }
}

export default walletReducer;
