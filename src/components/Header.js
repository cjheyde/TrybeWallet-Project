import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './css/Header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      despesaTotal: 0,
      cambioReferencia: 'BRL',
    };
  }

  calculateTotalExpenses = () => {
    this.setState({
      despesaTotal: 10,
    });
  }

  render() {
    const { email } = this.props;
    const { despesaTotal, cambioReferencia } = this.state;
    return (
      <div>
        Header
        <fieldset className="info_principal">

          <h4
            data-testid="email-field"
          >
            {' '}
            {email}
            {' '}
          </h4>

          <h4 data-testid="total-field">
            {' '}
            {' '}
            Despesa total = R$
            {' '}
            { despesaTotal }
          </h4>

          <h4 data-testid="header-currency-field">
            {' '}
            {cambioReferencia}
          </h4>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
});

Header.propTypes = {
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
