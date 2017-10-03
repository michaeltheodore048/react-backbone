import React from 'react';

import PropTypes from 'prop-types';

import styles from './styles.scss';

const Welcome = () => <h1 className={styles.title}>Welcome</h1>;

export default Welcome;

/* eslint-disable */
Welcome.propTypes = {
  title: PropTypes.any,
};
/* eslint-enable */

Welcome.defaultProps = {
  title: '',
};
