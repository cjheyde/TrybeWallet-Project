import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './css/Expenses.css';
import { addAllExpenses } from '../actions/index';

class Expenses extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      valorDespesa: 0,
      descricao: '',
      metodoPagamento: 'Cartão de crédito',
      // metodosPag: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      categoriasDespesa: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
      categoria: 'Trabalho',
      moeda: 'EUR',
      gasto: {},
    };
  }

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      { [name]: value },
      () => this.objectStructure(),
    );
  }

  onClick = () => {
    const { id, gasto } = this.state;
    const { addAllExpensesToStore } = this.props;
    addAllExpensesToStore(gasto);
    this.setState({
      id: id + 1,
    });
  };

  objectStructure() {
    const { id, valorDespesa, descricao, moeda, metodoPagamento,
      categoria } = this.state;
    this.setState({
      gasto: {
        id,
        valorDespesa,
        descricao,
        moeda,
        metodoPagamento,
        categoria,
      },
    });
  }

  render() {
    const { valorDespesa, descricao, metodoPagamento, categoria,
      categoriasDespesa, moeda } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        Expenses
        <fieldset className="setagem_despesas">
          <label htmlFor="valorDespesa">
            Valor:
            <input
              type="number"
              name="valorDespesa"
              value={ valorDespesa }
              onChange={ this.onChange }
              id="valorDespesa"
              data-testid="value-input"
            />
          </label>

          <label htmlFor="moeda">
            Moeda:
            <select
              name="moeda"
              id="moeda"
              required
              onChange={ this.onChange }
              value={ moeda }
            >
              {
                currencies.map((option, index) => (
                  <option key={ index }>{ option }</option>
                ))
              }
            </select>
          </label>

          <label htmlFor="metodosPagamento">
            Método de pagamento:
            <select
              name="metodosPagamento"
              id="metodosPagamento"
              required
              data-testid="method-input"
              onChange={ this.onChange }
              value={ metodoPagamento }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Crédito">Cartão de crédito</option>
              <option value="Cartão de Débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="categoria">
            Categoria:
            <select
              name="categoria"
              id="categoria"
              required
              data-testid="tag-input"
              onChange={ this.onChange }
              value={ categoria }
            >
              {
                categoriasDespesa.map((option, index) => (
                  <option key={ index }>{ option }</option>
                ))
              }
            </select>
          </label>

          <label htmlFor="descricao">
            Descrição:
            <textarea
              name="descricao"
              value={ descricao }
              onChange={ this.onChange }
              maxLength="1000"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="addButton">
            <input
              type="button"
              value="Adicionar Despesa"
              onClick={ this.onClick }
            />
          </label>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addAllExpensesToStore: (moeda) => dispatch(
    addAllExpenses(moeda),
  ),
});

Expenses.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
  addAllExpensesToStore: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
