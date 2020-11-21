import React from 'react';
import ReactDOM from 'react-dom';

import {
  Appointment,
  AppointmentsDayView,
} from '../src/Appointment';

describe('AppointsDayView', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) =>
    ReactDOM.render(component, container);

  it('renders a div wiht the right id', () => {
    render(<AppointmentsDayView appointments={[]} />);

    expect(
      container.querySelector('div#appointmentsDayView')
    ).not.toBeNull();

    expect(container.querySelector('ol')).not.toBeNull()
  });

  xit('renders each appointment with an li', () => {
    const today = new Date();
    const appointments = [
      { startsAt: today.setHours(12, 0) },
      { startsAt: today.setHours(13, 0) },
    ];

    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector('li')[0]).toEqual('12:00');
    expect(container.querySelector('li')[1]).toEqual('13:00');
  });
});

describe('Appointment', () => {
  let container;
  let customer;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) =>
    ReactDOM.render(component, container);

  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer first name', () => {
    customer = { firstName: 'Jordan' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Jordan');
  });
});
