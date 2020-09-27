import React from 'react';
import { render } from '@testing-library/react';
import Donut from './Donut';
import DonutValue from './DonutValue';
import DonutLabel from '../DonutLabel/DonutLabel';

test('Donut works correctly', () => {
  const { getByTestId, rerender } = render(<Donut>18</Donut>);
  expect(getByTestId('donut')).toHaveTextContent('18');

  rerender(
    <Donut>
      <DonutValue>9</DonutValue>
    </Donut>
  );
  expect(getByTestId('donut')).toHaveTextContent('9');

  rerender(<Donut></Donut>);
  expect(getByTestId('donut')).toHaveTextContent('0');

  rerender(
    <Donut>
      <DonutValue>30</DonutValue>
      <DonutLabel>Result</DonutLabel>
    </Donut>
  );
  expect(getByTestId('donut')).toHaveTextContent('30%Result');

  rerender(
    <Donut>
      <DonutLabel>Result</DonutLabel>
    </Donut>
  );
  expect(getByTestId('donut')).toHaveTextContent('Result');

  rerender(
    <Donut>
      <DonutValue symbol='$'>40</DonutValue>
      <DonutLabel>Result</DonutLabel>
    </Donut>
  );

  expect(getByTestId('symbol')).toHaveTextContent('$');

  rerender(
    <Donut>
      <DonutValue>40</DonutValue>
      <DonutLabel>Result</DonutLabel>
    </Donut>
  );

  expect(getByTestId('symbol')).toHaveTextContent('%');
});
