import React from 'react';
import Donut from './Donut';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DonutProps } from '../../types';
import { DonutLabel, DonutValue } from '../../index';

export default {
  title: 'Donut',
  component: Donut,
  argTypes: {
    size: { control: 'number' },
    children: { control: 'range', name: 'value' },
    strokeWidth: { control: 'range' },
    color: { control: 'color' },
    trackColor: { control: 'color' },
    indicatorColor: { control: 'color' },
    trackStyle: { options: ['butt', 'round', 'square'] },
    trackStrokeWidth: { control: 'range' },
    indicatorStrokeWidth: { control: 'range' },
    linecap: { control: 'inline-radio' },
  },
  subcomponents: { DonutValue, DonutLabel },
} as Meta;

export const SimpleDonut: Story<DonutProps> = (args) => <Donut {...args} />;

export const DonutWithLabel: Story<DonutProps> = (args) => (
  <Donut {...args}>
    <DonutValue>85</DonutValue>
    <DonutLabel>Result</DonutLabel>
  </Donut>
);

export const StyledDonut: Story<DonutProps> = (args) => (
  <Donut trackStrokeWidth={9} trackColor='#d3f7ee' indicatorColor='#23d5aa'>
    <DonutValue
      symbolPosition='top-right'
      styleSymbol={{ fontWeight: 'bold', fontSize: '18px' }}
      style={{ fontWeight: 'bold' }}
    >
      79
    </DonutValue>
  </Donut>
);
