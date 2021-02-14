import React from 'react';
import { render } from '@testing-library/react';
import { DonutMultiple, DonutElement } from '../../';
import DonutLabel from '../DonutLabel/DonutLabel';

test('Test if donut multiple renders correctly', () => {
  const { getByTestId } = render(
    <DonutMultiple>
      <DonutElement>25</DonutElement>
      <DonutElement>25</DonutElement>
      <DonutElement>50</DonutElement>
      <DonutLabel>Price</DonutLabel>
    </DonutMultiple>
  );
  expect(getByTestId('donut-multiple')).toHaveTextContent(/price/i);
});
