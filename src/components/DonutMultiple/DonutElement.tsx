import React from 'react';
import { DonutProps } from '../../types';

type Props = DonutProps & {
  ratio: number;
  increaseFilled: (itemRatio: number) => any;
  cx?: number;
  cy?: number;
  dashArray: number;
  radius?: number;
  startAngle: number;
  filled: number;
  angle: number;
  offset: number;
  itemRatio: number;
  name: string;
};

const DonutElement = ({
  color = 'black',
  cx,
  cy,
  radius,
  strokeWidth,
  dashArray,
  startAngle,
  angle,
  offset,
  animate = false,
}: Partial<Props>) => {
  return (
    <circle
      data-testid='donut-element'
      cx={50}
      cy={50}
      r={radius}
      fill='transparent'
      strokeWidth={strokeWidth}
      stroke={color}
      strokeDasharray={dashArray}
      strokeDashoffset={offset}
      transform={`rotate(${angle} ${cx} ${cy})`}
    >
      {animate ? (
        <animateTransform
          attributeName='transform'
          attributeType='XML'
          type='rotate'
          from={`${startAngle} ${cx} ${cy}`}
          to={`${angle} ${cx} ${cy}`}
          dur='1s'
        />
      ) : null}
    </circle>
  );
};

export default DonutElement;
