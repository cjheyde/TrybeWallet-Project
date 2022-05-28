import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesThunk } from '../actions/index';
import Header from '../components/Header';
import Expenses from '../components/Expenses';
import '../components/css/Wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrenciesThunkToStore } = this.props;
    fetchCurrenciesThunkToStore();
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <Header />
        <Expenses />

        <table>
          <thead>
            <tr className="cabecalio">
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((gasto) => {
              const moedaAtual = Object.entries(gasto.exchangeRates)
                .find((currency) => (currency[0] === gasto.currency));
              const nomedaMoeda = moedaAtual[1].name.split('/')[0];
              const valordaMoeada = moedaAtual[1].ask;
              const valorConvertido = gasto.value * valordaMoeada;
              return (
                <tr key={ gasto.id } className="despesas">
                  <td>{gasto.description}</td>
                  <td>{gasto.tag}</td>
                  <td>{gasto.method}</td>
                  <td>{Number(gasto.value).toFixed(2)}</td>
                  <td>{nomedaMoeda}</td>
                  <td>{Number(valordaMoeada).toFixed(2)}</td>
                  <td>{valorConvertido.toFixed(2)}</td>
                  <td>Real</td>
                  <td>Editar/Excluir</td>
                  {/* <label htmlFor="editBtn">
                      <input
                        type="button"
                        value="Editar"
                        onClick={ this.onEditClick }
                      />
                    </label>
                    <label htmlFor="exclBtn">
                      <input
                        type="button"
                        value="Excluir"
                        onClick={ this.onDeleteClick }
                      />
                    </label> */}
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
  expenses: propTypes.arrayOf(propTypes.shape).isRequired,
  fetchCurrenciesThunkToStore: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
