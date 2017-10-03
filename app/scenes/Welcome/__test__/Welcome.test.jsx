import React from 'react';

import { shallow } from 'enzyme';

import Welcome from '../Welcome';

jest.mock('../styles.scss', () => {
  const data = {
    title: {},
  };
  return data;
});

describe('Glph Component', () => {
  test('Expect render passed param', () => {
    const text = 'Welcome';
    const WelcomeComponent = shallow(<Welcome />);

    expect(WelcomeComponent.text()).toEqual(text);
  });
});
