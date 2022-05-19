import getCurrencies from '../services/api';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
// export const SET_USER = 'SET_USER';

export const CREATE_USERS_LIST = 'CREATE_USERS_LIST';

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  email,
});

export const setUserPassword = (password) => ({
  type: SET_USER_PASSWORD,
  password,
});

// export const setUser = (email, password) => ({
//   type: SET_USER,
//   payload: {
//     email,
//     password,
//   },
// });

export const createUsersList = (user) => ({
  type: CREATE_USERS_LIST,
  payload: user,
});

export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_ERROR = 'FETCH_CURRENCY_ERROR';

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
