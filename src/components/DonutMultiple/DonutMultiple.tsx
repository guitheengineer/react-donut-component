import React, { Children, cloneElement } from 'react';
import './donut-multiple.scss';
import { DonutProps } from '../../types';
import DonutSubtitle from './DonutSubtitle';
const donutElement = 'DonutElement';
const donutLabel = 'DonutLabel';

const DonutMultiple = ({
  children,
  size = 220,
  strokeWidth = 5,
  animate = false,
  linecap = 'butt',
}: DonutProps) => {
  const cx = 50;
  const cy = 50;
  const dashArray = 2 * Math.PI * 30;
  const radius = 30;
  const startAngle = -90;

  const sum = Array.from(children).reduce((sum: number, child: any) => {
    if (child.type.name === donutElement) {
      return sum + Number(child.props.children);
    }
    return sum;
  }, 0);
  const ratio = 100 / Number(sum);

  let filled = 0;

  return (
    <div
      style={{ width: size }}
      className='Donut-multiple'
      data-testid='donut-multiple'
    >
      <svg strokeLinecap={linecap} width={size} viewBox='0 0 100 100'>
        {Children.map(children, (child) => {
          if (child.type.name === donutElement) {
            const value = Number(child.props.children);
            const itemRatio = ratio * value;
            const angle = (filled * 360) / 100 + startAngle;
            const offset = dashArray - (dashArray * itemRatio) / 100;
            filled += itemRatio;

            return cloneElement(child, {
              cx,
              cy,
              strokeWidth,
              dashArray,
              radius,
              startAngle,
              ratio,
              angle,
              offset,
              itemRatio,
              filled,
              animate,
            });
          }
        })}
      </svg>
      {Children.map(children, (child) => {
        if (child.type.name === donutLabel) {
          return cloneElement(child, { multiple: true });
        }
      })}
      <div className='Donut-multiple__subtitles'>
        {Children.map(children, (child) => {
          if (child.type.name === donutElement && child.props.name) {
            return cloneElement(
              <DonutSubtitle
                name={child.props.name}
                color={child.props.color || 'black'}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default DonutMultiple;
