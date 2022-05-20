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
    return (
      <div>
        Wallet
        <Header />
        <Expenses />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesThunkToStore: () => dispatch(fetchCurrenciesThunk()),
});

Wallet.propTypes = {
  fetchCurrenciesThunkToStore: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
