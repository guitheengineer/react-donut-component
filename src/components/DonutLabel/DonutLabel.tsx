import React, { CSSProperties } from 'react';
import './donut-label.scss';

type Props = {
  children?: string | number;
  className?: string;
  style?: CSSProperties;
  multiple?: boolean;
};

const DonutLabel = ({ children, className, style, multiple }: Props) => (
  <h6
    style={style}
    className={`${multiple ? 'Donut-multiple__label' : 'Donut__label'} ${
      className || ''
    }`}
  >
    {children || ''}
  </h6>
);

export default DonutLabel;
