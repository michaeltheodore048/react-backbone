import React from 'react';

import { shallow } from 'enzyme';

import Login from '../Login';

jest.mock('../styles.scss', () => {
  const data = {
    title: {},
  };
  return data;
});

describe('Glph Component', () => {
  test('Expect render passed param', () => {
    const title = 'This is login page';
    const LoginComponent = shallow(<Login title={title} />);

    expect(LoginComponent.text()).toEqual(title);
  });
});
