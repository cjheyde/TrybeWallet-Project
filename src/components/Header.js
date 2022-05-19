import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

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
        <fieldset>
          <h2 data-testid="email-field">{email}</h2>
          <section data-testid="total-field">
            Despesa total
            {' '}
            {despesaTotal}
          </section>
          <h3 data-testid="header-currency-field">
            Câmbio para
            {' '}
            {cambioReferencia}
          </h3>
        </fieldset>

      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
