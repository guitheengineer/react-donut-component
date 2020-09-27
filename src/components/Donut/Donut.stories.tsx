import React from 'react';
import Donut from './Donut';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DonutProps } from '../../types';
import DonutLabel from '../DonutLabel/DonutLabel';
import DonutValue from './DonutValue';

export default {
  title: 'Donut',
  component: Donut,
  argTypes: {
    strokeWidth: { control: 'range' },
    color: { control: 'color' },
    trackColor: { control: 'color' },
    trackStyle: { options: ['butt', 'round', 'square'] },
    children: { control: 'range' },
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
