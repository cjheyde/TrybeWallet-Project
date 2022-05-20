import React from 'react';
// import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './css/Expenses.css';
import { Button } from 'bootstrap';
import Select from './Select';
import TextArea from './TextArea';
import { addExpenses, addSettings } from '../actions/index';

class Expenses extends React.Component {
  constructor() {
    super();

    this.state = {
      valorDespesa: 0,
      descricao: '',
      metodoPagamento: '',
      metodosPagamento: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      categoriasDespesa: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
      categoria: '',
      moeda: '',
      // isSubmitButtonDisabled: false,
    };
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { valorDespesa, descricao, metodoPagamento, categoria,
      metodosPagamento, categoriasDespesa, moeda } = this.state;
    return (
      <div>
        Expenses
        <fieldset className="setagem_despesas">

          <label htmlFor="valorDespesa" data-testid="value-input">
            Valor
            {' '}
            <input
              id="valorDespesa"
              type="number"
              value={ valorDespesa }
              onChange={ this.onChange }
            />
          </label>

          <label htmlFor="moeda">
            Moeda
            {' '}
            <select
              required
              id="moeda"
              name="moeda"
              value={ moeda }
            >
              {
                currencies.map((currency, index) => (
                  <option key={ index } value={ currency }>{currency}</option>
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
              id="metodosPagamento"
              name="metodosPagamento"
              onChange={ this.onChange }
              value={ metodoPagamento }
            >
              {
                metodosPagamento.map((metodo, index) => (
                  <option key={ index } value={ metodo }>{metodo}</option>
                ))
              }
            </select>
          </label>

          <br />
          <Select
            defaultOption="Selecione"
            onChange={ this.handleChange }
            value={ categoria }
            label="Categoria: "
            id="categotia"
            name="categoria"
            options={ categoriasDespesa }
          />

          <TextArea
            label="Descrição: "
            value={ descricao }
            name="descriçao"
            maxLength="1000"
            onChange={ this.handleChange }
            required
            data-testid="description-input"
          />

          <Button
            label="enviar"
            onClick={ () => {
              // this.setState({ isSubmitButtonDisabled: true });
              this.addExpensesToStore(valorDespesa, descricao, categoria);
              this.addSettingsToStore(moeda, metodoPagamento);
            } }
          />
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpensesToStore: (valorDespesa, descricao, categoria) => dispatch(
    addExpenses(valorDespesa, descricao, categoria),
  ),
  addSettingsToStore: (moeda, metodoPagamento) => dispatch(
    addSettings(moeda, metodoPagamento),
  ),
});

// Expenses.propTypes = {
//   currencies: propTypes.arrayOf(propTypes.string).isRequired,
//   addExpensesToStore: propTypes.func.isRequired,
//   addSettingsToStore: propTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
