import React from 'react';
import ReactDOM from 'react-dom';
//import { createContainer } from './donManipulators';
import { CustomerForm } from '../src/CustomerForm';

const createContainer = () => {
  const container = document.createElement('div');

  return {
    render: component => ReactDOM.render(component, container),
    container
  };
};

describe('CustomerForm', () => {
  let render, container;

  beforeEach(() => {
    // ({ render, container } = createContainer());
    render = createContainer().render;
    container = createContainer().container;
  });
  console.dir(createContainer());

  it('renders a form', () => {
    render();
  });

  expect(
    container.querySelector('form[id="customer"]')
  ).not.toBeNull();
});
