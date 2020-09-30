import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { DonutProps } from '../../types';
import { DonutMultiple, DonutElement, DonutLabel } from '../../index';

export default {
  title: 'Donut Multiple',
  component: DonutMultiple,
  argTypes: {
    size: { control: 'number' },
    strokeWidth: { control: 'range' },
    linecap: { control: 'inline-radio' },
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

export const StyledMultipleLabel: Story<DonutProps> = (args) => (
  <DonutMultiple {...args}>
    <DonutElement name='Another one' color='#56ADA7'>
      30
    </DonutElement>
    <DonutElement name='Another one' color='#DC442D'>
      20
    </DonutElement>
    <DonutElement name='Another one' color='#EA9564'>
      20
    </DonutElement>
    <DonutElement name='Another one' color='#4C7D85'>
      20
    </DonutElement>
    <DonutElement name='Another one' color='#30434D'>
      10
    </DonutElement>
    <DonutLabel style={{ fontSize: '20px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        20<p>Testing</p>
      </div>
    </DonutLabel>
  </DonutMultiple>
);

export const StyledMultipleLabel2: Story<DonutProps> = (args) => (
  <DonutMultiple {...args}>
    <DonutElement name='Another one' color='#9dd7e7'>
      60
    </DonutElement>
    <DonutElement name='Another one' color='#cceff1'>
      20
    </DonutElement>
    <DonutElement name='Another one' color='#005938'>
      10
    </DonutElement>
    <DonutElement name='Another one' color='#00b97f'>
      5
    </DonutElement>
  </DonutMultiple>
);

export const StyledMultipleLabel3: Story<DonutProps> = (args) => (
  <DonutMultiple size={170} strokeWidth={12}>
    <DonutElement color='blue'>50</DonutElement>
    <DonutElement color='cyan'>25</DonutElement>
    <DonutElement color='pink'>25</DonutElement>
  </DonutMultiple>
);
