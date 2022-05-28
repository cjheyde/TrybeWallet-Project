import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Expenses from '../components/Expenses';
import Header from '../components/Header';
import { fetchCurrenciesThunk } from '../actions/index';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrenciesThunkToStore } = this.props;
    fetchCurrenciesThunkToStore();
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        Wallet
        <Header />
        <Expenses />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesThunkToStore: () => dispatch(fetchCurrenciesThunk()),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  fetchCurrenciesThunkToStore: propTypes.func.isRequired,
  expenses: propTypes.arrayOf(propTypes.shape).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
