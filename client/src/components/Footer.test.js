import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, screen } from '@testing-library/react';
configure({ adapter: new Adapter() });

import Footer from './Footer';

describe('<Footer />', () => {
  it('Should render the footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });
});
