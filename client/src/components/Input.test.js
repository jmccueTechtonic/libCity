import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });

import Input from './Input';

const title = {
  id: 'title',
  valid: false,
  touched: false,
  validation: { required: true, pattern: '.{2}' },
  attributes: { type: 'text' },
  placeholder: 'Enter Title',
  value: '',
  label: 'Title',
  error: 'Must have a Title',
  dbName: 'title',
};

const author = {
  id: 'author',
  valid: false,
  touched: false,
  validation: { required: true, pattern: '.{2}' },
  attributes: { type: 'text' },
  placeholder: 'Enter Author',
  value: '',
  label: 'Author',
  error: 'Must have an Author',
  dbName: 'author',
};

const image = {
  id: 'file',
  valid: true,
  touched: false,
  validation: { required: false, pattern: '.{1}' },
  attributes: { type: 'file' },
  placeholder: '',
  value: '',
  label: '',
  error: 'Must have an image',
  dbName: 'image',
};

const synopsis = {
  id: 'synopsis',
  valid: true,
  touched: false,
  validation: { required: false, pattern: '.{1}' },
  attributes: { name: 'synopsis' },
  placeholder: 'This book is about...',
  value: '',
  label: 'Synopsis',
  error: 'Must have a synopsis',
  dbName: 'description',
};

const published = {
  id: 'published',
  valid: true,
  touched: false,
  validation: { required: false, pattern: '.{1}' },
  attributes: { type: 'date' },
  placeholder: '',
  value: '' || '2000-01-01',
  label: 'Published',
  error: 'Must have a published date',
  dbName: 'publishDate',
};

const pages = {
  id: 'numPages',
  valid: true,
  touched: false,
  validation: { required: false, pattern: '.{1}' },
  attributes: { type: 'number' },
  placeholder: 'Num. Pages',
  value: 0,
  label: 'Pages',
  error: 'Number of pages',
  dbName: 'pages',
};

const rating = {
  id: 'rating',
  valid: true,
  touched: false,
  validation: { required: false, pattern: '.{1}' },
  value: 0,
  label: 'Rating',
  error: 'Must have a rating',
  dbName: 'ratings',
};

const wrong = {
  id: 'somethingRandom',
  valid: true,
  touched: false,
  validation: { required: false, pattern: '.{1}' },
  value: 0,
  label: 'Rating',
  error: 'Must have a rating',
  dbName: 'ratings',
};

describe('<Input/>', () => {
  it('Should render an author input', () => {
    const wrapper = shallow(<Input el={author} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render a file input', () => {
    const wrapper = shallow(<Input el={image} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render a synopsis textarea', () => {
    const wrapper = shallow(<Input el={synopsis} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render a published input', () => {
    const wrapper = shallow(<Input el={published} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render a pages input', () => {
    const wrapper = shallow(<Input el={pages} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render rating component', () => {
    const wrapper = shallow(<Input el={rating} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render h1 tag warning for incorrect id', () => {
    const wrapper = shallow(<Input el={wrong} />);
    expect(wrapper.html()).toEqual('<h1>wrong input</h1>');
  });
});
