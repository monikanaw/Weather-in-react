import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
 componentDidMount() {
   this.inputElement.focus();
 }

  render(){
    return(
      <form onSubmit={this.props.getWeather}>
        <input
        ref={(inputEl) => {this.inputElement = inputEl}}
        type="text"
        name="city"
        placeholder="City"
        />
        <button> Get Weather </button>
      </form>
    );
  }
}

Form.propTypes = {
  getWeather: PropTypes.func.isRequired,
};

export default Form;
