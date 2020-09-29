import React, { useState, cloneElement, Children } from 'react';
import './donut.scss';
import DonutValue from './DonutValue';
import { DonutProps } from '../../types';

const Donut = ({
  size = 180,
  strokeWidth = 15,
  className,
  children,
  color = 'black',
  style,
  trackColor = '#dfdff1',
  trackStyle,
  animate = false,
  linecap = 'butt',
}: DonutProps) => {
  const [value, setValue] = useState(0);
  const halfSize = size * 0.5;
  const radius = halfSize - strokeWidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeval = (value * circumference) / 100;
  const strokeDasharray = `${strokeval} ${circumference}`;

  const rotateVal = `rotate(-90 ${halfSize},${halfSize})`;

  const presentValue = (value: number) => {
    setValue(value);
  };

  return (
    <div style={{ width: size, color }} data-testid='donut' className='Donut'>
      <svg
        style={style}
        width={size}
        height={size}
        className={`Donut__svg ${className}`}
      >
        <circle
          r={radius}
          cx={halfSize}
          cy={halfSize}
          transform={rotateVal}
          style={trackStyle ? trackStyle : { strokeWidth, stroke: trackColor }}
          className='Donut__track'
        />
        <circle
          r={radius}
          cx={halfSize}
          cy={halfSize}
          transform={rotateVal}
          style={{
            strokeWidth,
            strokeDasharray,
            stroke: color,
            transition: animate ? 'all 2s ease' : 'initial',
          }}
          className='Donut__indicator'
          strokeLinecap={linecap}
        />
      </svg>
      <div className='Donut__text-container'>
        {typeof children === 'number' ||
        typeof children === 'string' ||
        typeof children === 'undefined' ? (
          <DonutValue presentValue={presentValue}>
            {children === 'undefined' ? '0' : children}
          </DonutValue>
        ) : (
          Children.map(children, (child) =>
            cloneElement(child as any, { presentValue })
          )
        )}
      </div>
    </div>
  );
};

export default Donut;
