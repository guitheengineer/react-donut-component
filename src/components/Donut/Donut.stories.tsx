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
  <Donut
    styleTrack={{ strokeWidth: 9, stroke: 'AliceBlue' }}
    styleIndicator={{ stroke: 'Cyan', strokeLinecap: 'round' }}
    {...args}
  >
    <DonutValue
      style={{ fontWeight: 'bold' }}
      symbol='°C'
      styleSymbol={{ fontWeight: 'bold', fontSize: '18px' }}
      symbolPosition='top-right'
    >
      79
    </DonutValue>
  </Donut>
);

export const StyledDonut2: Story<DonutProps> = (args) => (
  <Donut
    color='rgba(0,50,255,1)'
    indicatorColor='rgba(0,50,255,1)'
    linecap='round'
    size={129}
    strokeWidth={15}
    trackColor='rgba(238,238,238,1)'
  >
    <DonutValue style={{ fontSize: '26px' }}>30</DonutValue>
  </Donut>
);

export const StyledDonut3: Story<DonutProps> = (args) => (
  <Donut
    indicatorColor='#F6A09E'
    size={129}
    strokeWidth={15}
    trackColor='#FBBE95'
    trackStrokeWidth={7}
  >
    <DonutValue showValue={false}>50</DonutValue>
  </Donut>
);
