import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { CheckboxWithLabel } from '../index';

afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
