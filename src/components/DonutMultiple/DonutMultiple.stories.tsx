import React from 'react';
import { DonutMultiple, DonutElement } from './';
import { Story } from '@storybook/react/types-6-0';
import { DonutProps } from '../../types';
import DonutLabel from '../DonutLabel/DonutLabel';
import DonutValue from '../Donut/DonutValue';

export default {
  title: 'Donut Multiple',
  component: DonutMultiple,
  argTypes: {
    strokeWidth: { control: 'range' },
  },
};

export const Multiple: Story<DonutProps> = (args) => (
  <DonutMultiple {...args}>
    <DonutElement color='red'>10</DonutElement>
    <DonutElement color='blue'>90</DonutElement>
    <DonutLabel>Posts</DonutLabel>
  </DonutMultiple>
);

export const MultipleLabelWithNames: Story<DonutProps> = (args) => (
  <DonutMultiple {...args}>
    <DonutElement name='Red one' color='red'>
      10
    </DonutElement>
    <DonutElement name='Blue one' color='blue'>
      90
    </DonutElement>
    <DonutLabel>Posts</DonutLabel>
  </DonutMultiple>
);
