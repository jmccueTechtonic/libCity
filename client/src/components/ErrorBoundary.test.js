import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, screen } from '@testing-library/react';
configure({ adapter: new Adapter() });

import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  it('should render error handler', () => {
    const wrapper = shallow(<ErrorBoundary />);
    expect(wrapper.exists()).toBe(true);
  });
});
