import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, screen } from '@testing-library/react';
configure({ adapter: new Adapter() });

import StarSvg from './StarSvg';

describe('<StarSvg />', () => {
  it('should render a stars', () => {
    const wrapper = shallow(<StarSvg />);
    expect(wrapper.exists()).toBe(true);
  });
});
