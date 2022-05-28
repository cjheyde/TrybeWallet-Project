import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './css/Table.css';

class Table extends Component {
  onEditClick = () => {

  }

  onDeleteClick = () => {

  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <fieldset>
          <tr className="cabecalio">
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Moeda de conversão</th>
            <th>Valor convertido</th>
            <th>Edita/Excluir</th>
          </tr>
        </fieldset>
        <fieldset>
          {expenses.map((gasto) => {
            const um = 1;
            const moedaEscolhida = Object.entries(gasto.exchangeRates)
              .find((moeda) => moeda[0] === gasto.moeda);
            const nomeDaMoeda = moedaEscolhida[um].name;
            const valorDoCambio = moedaEscolhida[um].ask;
            const valorConvertido = gasto.valorDespesa * valorDoCambio;
            return (
              <tr key={ gasto.id } className="despesas">
                <td>{gasto.descricao}</td>
                <td>{gasto.categoria}</td>
                <td>{gasto.metodoPagamento}</td>
                <td>{Number(gasto.valorDespesa).toFixed(2)}</td>
                <td>{nomeDaMoeda}</td>
                <td>{Number(valorDoCambio).toFixed(2)}</td>
                <td>Real</td>
                <td>{Number(valorConvertido).toFixed(2)}</td>
                <td>
                  <label htmlFor="editBtn">
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
                  </label>
                </td>
              </tr>
            );
          })}
        </fieldset>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: propTypes.arrayOf(propTypes.shape).isRequired,
};

export default connect(mapStateToProps, null)(Table);
