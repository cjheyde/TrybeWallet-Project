import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchCurrenciesThunk } from '../actions/index';
import './css/Header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      cambioReferencia: 'BRL',
    };
  }

  componentDidMount() {
    const { fetchCurrenciesThunkToStore } = this.props;
    fetchCurrenciesThunkToStore();
  }

  render() {
    const { email, expenses } = this.props;
    const { cambioReferencia } = this.state;
    const despesaTotal = (expenses.reduce((acc, gasto) => {
      const moedaEscolhida = Object.entries(gasto.exchangeRates)
        .find((moeda) => moeda[0] === gasto.moeda);
      return acc + (gasto.value * moedaEscolhida[1].ask);
    }, 0));
    return (
      <div>
        Header
        <fieldset className="info_principal">

          <h4
            data-testid="email-field"
          >
            {' '}
            {email}
            {' '}
          </h4>

          <h4 data-testid="total-field">
            {' '}
            {' '}
            Despesa total = R$
            {' '}
            { despesaTotal.toFixed(2) }
          </h4>

          <h4 data-testid="header-currency-field">
            {' '}
            {cambioReferencia}
          </h4>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
  expenses: store.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesThunkToStore: () => dispatch(fetchCurrenciesThunk()),
});

Header.propTypes = {
  email: propTypes.string,
  fetchCurrenciesThunkToStore: propTypes.func,
  expenses: propTypes.arrayOf(propTypes.shape),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
