import React, { Component } from 'react';
import PropTypes from 'prop-types';
// ref. usado aqui o Componente select do exercicio exercise-forms-redux
class Button extends Component {
  render() {
    const { label, onClick } = this.props;
    return (
      <button type="button" onClick={ onClick }>
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
