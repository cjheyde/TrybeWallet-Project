import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './css/Expenses.css';
import { addExpenses } from '../actions/index';

class Expenses extends React.Component {
  constructor() {
    super();

    this.state = {
      // valorDespesa: 0,
      // // tipoMoeda: '',
      // descricaoDespesa: '',
      // metodoPagamento: '',
      // metodosPagamento: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      // categoriaDespesa: '',
      // categoriasDespesa: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
      // isSubmitButtonDisabled: false,
      expenses: [],
    };
  }

  onChange({ target }) {
    this.setState(
      { [target.name]: target.value },
    );
  }

  handleClick = () => {
    const { addExpensesToStore } = this.props;
    const { expenses } = this.state;
    addExpensesToStore(expenses);
    this.setState({
      // isSubmitButtonDisabled: true,
    });
  }

  render() {
    // const {
    //   tipoMoeda, metodoPagamento, categoriaDespesa,
    //   descricaoDespesa,
    //   categoriasDespesa, metodosPagamento,
    //   isSubmitButtonDisabled,
    //   valorDespesa } = this.state;
    // const { currencies } = this.props;
    return (
      <div>
        Expenses
        <fieldset className="setagem_despesas">

          {/* <label htmlFor="valorDespesa" data-testid="value-input">
            Valor
            {' '}
            <input
              id="valorDespesa"
              name="valorDespesa"
              type="number"
              value={ valorDespesa }
              onChange={ this.onChange }
            />
          </label> */}

          <label htmlFor="moeda">
            Moeda
            {' '}
            <select
              required
              id="moeda"
              name="moeda"
              value={ tipoMoeda }
              onChange={ this.onChange }
            >
              {
                currencies.map((currency, index) => (
                  <option key={ index }>{currency}</option>
                ))
              }
            </select>
          </label>

          {/* <br />
          <label htmlFor="metodosPagamento">
            Método de pagamento
            {' '}
            <select
              required
              data-testid="method-input"
              id="metodosPagamento"
              value={ metodoPagamento }
              onChange={ this.onChange }
            >
              {
                metodosPagamento.map((metodo, index) => (
                  <option key={ index }>{metodo}</option>
                ))
              }
            </select>
          </label> */}

          {/* <br />
          <label htmlFor="categoriasDespesa">
            Categoria
            {' '}
            <select
              data-testid="tag-input"
              name="categoriasDespesa"
              id="categoriasDespesa"
              required
              value={ categoriaDespesa }
            >
              {categoriasDespesa.map((metodo, index) => (
                <option key={ index }>{metodo}</option>
              ))}
            </select>
          </label> */}

          <label
            htmlFor="descricaoDespesa"
            data-testid="description-input"
          >
            Descrição
            {' '}
            <input
              id="descricaoDespesa"
              name="descricaoDespesa"
              type="text"
              value={ descricaoDespesa }
              onChange={ this.onChange }
            />
          </label>

          <br />
          <label htmlFor="addDespesaBtn">
            <input
              type="button"
              value="Adicionar despesa"
              disabled={ isSubmitButtonDisabled }
              onClick={ this.handleClick }
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
  addExpensesToStore: (expenses) => dispatch(addExpenses(expenses)),
});

Expenses.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string),
  addExpensesToStore: propTypes.arrayOf(propTypes.string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
