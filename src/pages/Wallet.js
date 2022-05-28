import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Expenses from '../components/Expenses';
import Header from '../components/Header';
import { fetchCurrenciesThunk } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrenciesThunkToStore } = this.props;
    fetchCurrenciesThunkToStore();
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        Wallet
        <Header />
        <Expenses />

        <table>
          <thread>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Edita/Excluir</th>
            </tr>
          </thread>
          <tbody>
            {expenses.map((expense) => {
              const currencyCoins = Object.entries(expense.exchangeRates)
                .find((currency) => currency[0] === expense.currency);
              const currencyName = currencyCoins[1].name.split('/');
              const currencyValue = currencyCoins[1].ask;
              const currencyConverted = expense.value * currencyValue;
              return (
                <tr key={ expense.id }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{Number(expense.value).toFixed(2)}</td>
                  <td>{currencyName[0]}</td>
                  <td>{Number(currencyValue).toFixed(2)}</td>
                  <td>{currencyConverted.toFixed(2)}</td>
                  <td>Real</td>
                  <td>Editar/Excluir</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesThunkToStore: () => dispatch(fetchCurrenciesThunk()),
});

Wallet.propTypes = {
  fetchCurrenciesThunkToStore: propTypes.func.isRequired,
  expenses: propTypes.arrayOf(propTypes.shape).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
