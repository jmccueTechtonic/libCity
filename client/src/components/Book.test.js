import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, screen } from '@testing-library/react';
configure({ adapter: new Adapter() });

import Book from './Book';

describe('<Book />', () => {
  it('Should render a book card/container', () => {
    const data = 'book';
    const wrapper = shallow(
      <Book
        title={'Autobiography of a Yogi'}
        image={data}
        author={'Paramahansa Yogananda'}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
