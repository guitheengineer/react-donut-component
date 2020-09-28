import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { DonutProps } from '../../types';
import { DonutMultiple, DonutElement, DonutLabel } from '../../index';

export default {
  title: 'Donut Multiple',
  component: DonutMultiple,
  argTypes: {
    strokeWidth: { control: 'range' },
  },
};

export const Multiple: Story<DonutProps> = (args) => (
  <DonutMultiple {...args}>
    <DonutElement color='#3AB8D4'>10</DonutElement>
    <DonutElement color='#6543A2'>90</DonutElement>
    <DonutLabel>Posts</DonutLabel>
  </DonutMultiple>
);

export const MultipleLabelWithNames: Story<DonutProps> = (args) => (
  <DonutMultiple {...args}>
    <DonutElement name='Another one' color='#56ADA7'>
      10
    </DonutElement>
    <DonutElement name='Another one' color='#DC442D'>
      20
    </DonutElement>
    <DonutElement name='Another one' color='#EA9564'>
      30
    </DonutElement>
    <DonutElement name='Another one' color='#4C7D85'>
      20
    </DonutElement>
    <DonutElement name='Another one' color='#30434D'>
      20
    </DonutElement>
    <DonutLabel>Label</DonutLabel>
  </DonutMultiple>
);
