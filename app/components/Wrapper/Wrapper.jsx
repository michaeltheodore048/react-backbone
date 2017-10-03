import React from 'react';

import PropTypes from 'prop-types';

const Wrapper = ({ children }) => <div>{children}</div>;

export default Wrapper;

/* eslint-disable */
Wrapper.propTypes = {
  children: PropTypes.any,
};
/* eslint-enable */

Wrapper.defaultProps = {
  children: {},
};
