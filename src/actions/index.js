import getCurrencies from '../services/api';

// Coloque aqui suas actions
export const SET_USER = 'SET_USER';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_WALLET = 'SET_WALLET';
// export const USERS_LIST = 'USERS_LIST';
export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_ERROR = 'FETCH_CURRENCY_ERROR';

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setUserEmail = (email) => ({ type: SET_USER_EMAIL, payload: email });
export const setWallet = (wallet) => ({ type: SET_WALLET, payload: wallet });

// export const createUsersList = (users) => ({ type: USERS_LIST, payload: users });

export function fetchCurrenciesSuccess(currencies) {
  return {
    type: FETCH_CURRENCY_SUCCESS,
    payload: currencies,
  };
}

export function fetchCurrenciesError(error) {
  return {
    type: FETCH_CURRENCY_ERROR,
    payload: error,
  };
}

export const fetchCurrenciesThunk = () => (dispatch) => getCurrencies()
  .then((response) => {
    const currencies = {
      currency_code: response.currency.code, currency_ask: Number(response.currency.ask),
    };
    dispatch(fetchCurrenciesSuccess(currencies));
  })
  .catch((error) => {
    dispatch(fetchCurrenciesError(error));
  });
