import React from 'react';
import { createContainer } from './donManipulators';
import { CustomerForm } from '../src/CustomerForm';

describe('CustomerForm', function () {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const form = id => container.querySelector(`form[id="${id}"]`);

  it('renders a form', function () {
    render(<CustomerForm />);
  });

  it('should make form cry', function () {
    expect(form('customer')).not.toBeNull();
  });

});
