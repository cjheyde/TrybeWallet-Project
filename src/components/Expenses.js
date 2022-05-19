import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './css/Expenses.css';

class Expenses extends React.Component {
  constructor() {
    super();

    this.state = {
      valorDespesa: 0,
      descricaoDespesa: '',
      metodosPagamento: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      categoriasDespesa: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
  }

  onChange({ target }) {
    this.setState(
      { [target.name]: target.value },
    );
  }

  render() {
    const { valorDespesa, descricaoDespesa,
      metodosPagamento, categoriasDespesa } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        Expenses
        <fieldset className="setagem_despesas">

          <lable data-testid="value-input">
            Valor
            {' '}
            <input
              type="number"
              value={ valorDespesa }
              onChange={ this.onChange }
            />
          </lable>

          <label htmlFor="moeda">
            Moeda
            {' '}
            <select
              required
            >
              {
                currencies.map((currency, index) => (
                  <option key={ index }>{currency}</option>
                ))
              }
            </select>
          </label>

          <br />
          <label htmlFor="metodosPagamento">
            Método de pagamento
            {' '}
            <select
              required
              data-testid="method-input"
            >
              {
                metodosPagamento.map((metodo, index) => (
                  <option key={ index }>{metodo}</option>
                ))
              }
            </select>
          </label>

          <br />
          <label htmlFor="categoriasDespesa">
            Categoria
            {' '}
            <select
              data-testid="tag-input"
              name="categoriasDespesa"
              // id={id}
              required
              // onChange={ onChange }
              // value={ value }
            >
              {/* <option value={ defaultValue }>{ defaultOption }</option> */}
              {
                categoriasDespesa.map((metodo, index) => (
                  <option key={ index }>{metodo}</option>
                ))
              }
            </select>
          </label>

          <lable data-testid="description-input">
            Descrição
            {' '}
            <input
              type="text"
              value={ descricaoDespesa }
              onChange={ this.onChange }
            />
          </lable>

        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

Expenses.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps)(Expenses);
