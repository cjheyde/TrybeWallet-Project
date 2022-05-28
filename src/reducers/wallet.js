import {
  FETCH_CURRENCY_SUCCESS,
  // FETCH_CURRENCY_ERROR,
  ADD_EXPENSES,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  // error: '',
  // idCount: 0,
  // id: '',
};
// se initial state = [] => return [...state, state_model: action.value];
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
  case ADD_EXPENSES:
    return {
      ...state,
      // idCount: idExpense,
      expenses: [...state.expenses, {
        ...action.gasto,
        exchangeRates: action.currencies,
      }],
    };
  default:
    return state;
  }
}

export default walletReducer;
