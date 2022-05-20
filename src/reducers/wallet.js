import {
  FETCH_CURRENCY_SUCCESS,
  // FETCH_CURRENCY_ERROR,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies: action.currencies.filter((currency) => currency !== 'USDT'),
    };
  // case FETCH_CURRENCY_ERROR:
  //   return {
  //     ...state,
  //     wallet: {
  //       ...state.wallet,
  //       error: action.error,
  //     },
  //   };
  default:
    return state;
  }
}

export default walletReducer;
