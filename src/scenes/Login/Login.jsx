import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './styles.scss';
import '../../../assets/css/animation.css';

class Login extends Component {
  render() {
    const { title } = this.props;
    return (
      <h1 className={`${styles.title}`}>
        {title}
      </h1>
    );
  }
}

export default Login;

/* eslint-disable */
Login.propTypes = {
  title: PropTypes.any,
};
/* eslint-enable */

Login.defaultProps = {
  title: '',
};
