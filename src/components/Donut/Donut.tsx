import React, { useState, cloneElement, Children, useCallback } from 'react';
import './donut.scss';
import DonutValue from './DonutValue';
import { DonutProps } from 'types';

const Donut = ({
  size = 180,
  strokeWidth = 15,
  className,
  children,
  classNameContainer,
  color = 'black',
  style,
  styleContainer,
  trackColor = '#dfdff1',
  trackStrokeWidth,
  styleTrack,
  styleIndicator,
  animate = false,
  linecap = 'butt',
  indicatorStrokeWidth,
  indicatorColor = 'black',
}: DonutProps) => {
  const [value, setValue] = useState(0);
  const halfSize = size * 0.5;
  const radius = halfSize - strokeWidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeval = (value * circumference) / 100;
  const strokeDasharray = `${strokeval} ${circumference}`;

  const rotateVal = `rotate(-90 ${halfSize},${halfSize})`;

  const presentValue = useCallback(
    (value: number) => {
      setValue(value);
    },
    [value]
  );

  return (
    <div
      style={{ ...styleContainer, width: size, color }}
      data-testid="donut"
      className={`Donut ${classNameContainer}`}
    >
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
          style={
            styleTrack
              ? {
                  strokeWidth: trackStrokeWidth
                    ? trackStrokeWidth
                    : strokeWidth,
                  stroke: trackColor,
                  ...styleTrack,
                }
              : {
                  strokeWidth: trackStrokeWidth
                    ? trackStrokeWidth
                    : strokeWidth,
                  stroke: trackColor,
                }
          }
          className="Donut__track"
        />
        <circle
          r={radius}
          cx={halfSize}
          cy={halfSize}
          transform={rotateVal}
          style={
            styleIndicator
              ? {
                  strokeWidth: indicatorStrokeWidth
                    ? indicatorStrokeWidth
                    : strokeWidth,
                  strokeDasharray,
                  stroke: indicatorColor ? indicatorColor : color,
                  transition: animate ? 'all 2s ease' : 'initial',
                  ...styleIndicator,
                }
              : {
                  strokeWidth: indicatorStrokeWidth
                    ? indicatorStrokeWidth
                    : strokeWidth,
                  strokeDasharray,
                  stroke: indicatorColor ? indicatorColor : color,
                  transition: animate ? 'all 2s ease' : 'initial',
                }
          }
          className="Donut__indicator"
          strokeLinecap={linecap}
        />
      </svg>
      <div className="Donut__text-container">
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
