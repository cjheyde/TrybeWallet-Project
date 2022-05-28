import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './css/Header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      cambioReferencia: 'BRL',
    };
  }

  render() {
    const { email, expenses } = this.props;
    const { cambioReferencia } = this.state;
    const despesaTotal = expenses.reduce((acc, gasto) => {
      const moedaAtual = Object.entries(gasto.exchangeRates)
        .find((currency) => currency[0] === gasto.currency);
      return acc + (gasto.value * moedaAtual[1].ask);
    }, 0);
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
            {/* {' '}
            {' '}
            Despesa total = R$
            {' '} */}
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

Header.propTypes = {
  email: propTypes.string,
  expenses: propTypes.arrayOf(propTypes.shape),
}.isRequired;

export default connect(mapStateToProps, null)(Header);
