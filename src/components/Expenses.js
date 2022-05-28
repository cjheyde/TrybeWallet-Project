import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './css/Expenses.css';
import { addAllExpenses } from '../actions/index';

const CartCredito = 'Cartão de crédito';

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      gasto: {},
      id: 0,
      value: '',
      description: '',
      method: CartCredito,
      // metodosPag: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      categoriasDespesa: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
      tag: 'Lazer',
      currency: 'USD',
    };
  }

  onChange = ({ target }) => {
    const { name } = target;
    this.setState(
      { [name]: target.value },
      () => {
        const { id, value, description, currency, method, tag } = this.state;
        this.setState({
          gasto: {
            id,
            value,
            description,
            currency,
            method,
            tag,
          },
        });
      },
    );
  }

  onClick = (e) => {
    e.preventDefault();
    const { gasto } = this.state;
    const { addAllExpensesToStore } = this.props;
    addAllExpensesToStore(gasto);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: CartCredito,
      tag: '',
    }));
  };

  render() {
    const { value, description, method, tag,
      categoriasDespesa, currency } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        Expenses
        <fieldset className="setagem_despesas">
          <label htmlFor="value">
            Valor:
            <input
              type="number"
              name="value"
              value={ value }
              onChange={ this.onChange }
              id="value"
              data-testid="value-input"
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              required
              onChange={ this.onChange }
              value={ currency }
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
              value={ method }
            >
              {/* // value tem que ser igual ao titulo para clicar */}
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="categoria">
            Tag:
            <select
              name="categoria"
              id="categoria"
              required
              data-testid="tag-input"
              onChange={ this.onChange }
              value={ tag }
            >
              {
                categoriasDespesa.map((option, index) => (
                  <option key={ index }>{ option }</option>
                ))
              }
            </select>
          </label>

          <label htmlFor="description">
            Descrição:
            <textarea
              name="description"
              value={ description }
              onChange={ this.onChange }
              maxLength="1000"
              data-testid="description-input"
            />
          </label>

          <button
            type="submit"
            onClick={ this.onClick }
          >
            Adicionar despesa
          </button>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addAllExpensesToStore: (gasto) => dispatch(addAllExpenses(gasto)),
});

Expenses.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
  addAllExpensesToStore: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
