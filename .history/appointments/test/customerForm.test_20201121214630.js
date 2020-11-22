import React from 'react';
//import { createContainer } from './donManipulators';
import { CustomerForm } from '../src/CustomerForm';

const createContainer = () => {
  const container = document.createElement('div');

  return {
    render: (component) => ReactDOM.render(component, container),
    container,
  };
};

describe('CustomerForm', () => {
  let render, container;

  console.log(createContainer);
  beforeEach(() => {
    ( { render, container } = createContainer);
  });

  it('renders a form', () => {
    render();
  });

  expect(
    container.querySelector('form[id="customer"]')
  ).not.toBeNull();
});
