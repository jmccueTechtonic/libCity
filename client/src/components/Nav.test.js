import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, screen } from '@testing-library/react';
configure({ adapter: new Adapter() });

import Nav from './Nav';

describe('<Nav />', () => {
  it('Should render a nav component', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.exists()).toBe(true);
  });
});
