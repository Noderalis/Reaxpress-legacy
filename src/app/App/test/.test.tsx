import { shallow } from 'enzyme';
import * as React from 'react';
import { App } from '../App';

describe('Simple testing', () => {
  it('should render without error', () => {
    expect(
      shallow(<App />)
        .find('h1')
        .exists(),
    ).toBe(true);
  });
});
