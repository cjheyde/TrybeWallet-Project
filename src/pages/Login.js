import React from 'react';
import { connect } from 'react-redux';
// import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { setUserEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isSubmitButtonDisabled: true,
      pageToGo: null,
      email: '',
      password: '',
    };
  }

  // componentDidMount() {

  // }

  onInputChange = ({ target }) => {
    this.setState(
      { [target.name]: target.value },
      () => this.conditionValidation(),
    );
  }

  handleClick = () => {
    // const { setUser } = this.props;
    const { email } = this.state;
    setUserEmail(email);
    this.setState({
      isSubmitButtonDisabled: true,
      pageToGo: '/carteira',
    });
  }

  conditionValidation() {
    const { email, password } = this.state;

    // ref. para validação do email https://github.com/alexandreservian/regex-cheat-sheet
    const
      regEm = /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/;
    const MIN_PASSWORD_LENGTH = 6;

    const errorCases = [
      regEm.test(email),
      password.length >= MIN_PASSWORD_LENGTH,
    ];

    const disableButton = errorCases.every((errorCase) => errorCase === true);

    this.setState({
      isSubmitButtonDisabled: !disableButton,
    });
  }

  render() {
    const { email, password, isSubmitButtonDisabled, pageToGo } = this.state;
    if (pageToGo) {
      return (<Redirect to={ pageToGo } />);
    }
    return (
      <div>
        Login
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              id="email"
              name="email"
              type="email"
              placeholder="Email do Usuário"
              value={ email }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
              value={ password }
              onChange={ this.onInputChange }
            />
          </label>
          <br />
          <label htmlFor="submitButton">
            <input
              type="button"
              value="Entrar"
              disabled={ isSubmitButtonDisabled }
              onClick={ this.handleClick }
            />
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserEmail: (email) => dispatch(setUserEmail(email)),
});

// Login.propTypes = {
//   setUser: propTypes.func.isRequired,
// };

export default connect(null, mapDispatchToProps)(Login);
