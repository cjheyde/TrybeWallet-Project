import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Expenses from '../components/Expenses';
import Header from '../components/Header';
import '../components/css/Wallet.css';

class Wallet extends React.Component {
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
            {expenses.map((gasto) => {
              const moedaEscolhida = Object.values(gasto.exchangeRates)
                .find((moeda) => moeda.code === gasto.currency);
              const nomedaMoeda = moedaEscolhida.name.split('/')[0];
              const valordaMoeada = moedaEscolhida.ask;
              const valorConvertido = gasto.value * valordaMoeada;
              return (
                <tr key={ gasto.id } className="despesas">
                  <td>{gasto.description}</td>
                  <td>{gasto.tag}</td>
                  <td>{gasto.method}</td>
                  <td>{Number(gasto.value).toFixed(2)}</td>
                  <td>{nomedaMoeda}</td>
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

Wallet.propTypes = {
  expenses: propTypes.arrayOf(propTypes.shape).isRequired,
};

export default connect(mapStateToProps)(Wallet);
