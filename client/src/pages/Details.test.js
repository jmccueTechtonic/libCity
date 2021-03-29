import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });

import Details from './Details';

import { Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWithRouter = (component) => {
  const history = createMemoryHistory({
    initialEntries: ['/part1/idValue1/part2/idValue2/part3'],
  });
  const Wrapper = ({ children }) => (
    <Router history={history}>
      <Route path='/part1/:id1/part2/:id2/part3'>{children}</Route>
    </Router>
  );
  return {
    ...render(component, { wrapper: Wrapper }),
    history,
  };
};

describe('test', () => {
  it('test desc', async () => {
    const wrapper = renderWithRouter(<Details />);
    expect(wrapper.find('.details__img')).toBeTruthy();
  });
});

// import { MemoryRouter, Route } from 'react-router-dom';

// const RenderWithRouter = ({ children }) => (
//   <MemoryRouter>
//     <Route path='/books/details/:id'>{children}</Route>
//   </MemoryRouter>
// );
// const tf = new TestFramework();
// describe('<Details />', () => {
//   tf.init({ title: 'Some test' }, (props) =>
//     shallow(
//       <RenderWithRouter>
//         <Details {...props} />
//       </RenderWithRouter>
//     )
//   );

//   it('Some description', () => {
//     // const wrapper = tf.render().html();
//     // expect(wrapper).toContain('something');
//     it('should contain an image tag', () => {
//       const wrapper = shallow(<Details />);
//       expect(wrapper.find('.details__img')).toBeTruthy();
//     });
//   });
// });

// describe('<Details />', () => {
//   jest.mock('react-router', () => ({
//     useParams: jest.fn().mockReturnValue({ id: 1 }),
//   }));

//   it('should contain an image tag', () => {
//     const wrapper = shallow(<Details />);
//     expect(wrapper.find('.details__img')).toBeTruthy();
//   });
// });
