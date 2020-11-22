import React from 'react';
import { createContainer } from './donManipulators';
import { CustomerForm } from '../src/CustomerForm';

describe('CustomerForm', () => {
  let render, constainer;

  beforeEach(() => {
    ({ render, container } = createContainer);
  });

  it('renders a form', () => {
    render();
  });

  expect(
    container.querySelector('form[id="customer"]')
  ).not.toBeNull();
});
