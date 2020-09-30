import React, { CSSProperties, useEffect } from 'react';
import './donut-value.scss';
import { DonutProps } from '../../types';

type children = string | number;

type Props = Pick<DonutProps, 'style' | 'className'> &
  Partial<{
    children: children;
    symbol: string;
    styleContainer: CSSProperties;
    styleSymbol: CSSProperties;
    presentValue: (value: number | string) => any;
    symbolPosition: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right';
  }>;

const DonutValue = ({
  children = 0,
  style,
  styleSymbol,
  styleContainer,
  presentValue,
  symbol,
  symbolPosition = 'bottom-right',
  className,
}: Props) => {
  useEffect(() => {
    if (presentValue) {
      presentValue(children);
    }
  }, [presentValue, children]);
  return (
    <div
      style={{
        alignItems:
          symbolPosition === 'top-right' || symbolPosition === 'top-left'
            ? ''
            : 'baseline',
        flexDirection:
          symbolPosition === 'bottom-left' || symbolPosition === 'top-left'
            ? 'row-reverse'
            : 'initial',
        left:
          symbolPosition === 'bottom-left' || symbolPosition === 'top-left'
            ? '0'
            : '6px',
        ...styleContainer,
      }}
      className='Donut__value-container'
    >
      <span style={style} className={`Donut__value ${className}`}>
        {children}
      </span>
      <span data-testid='symbol' style={styleSymbol} className='Donut__symbol'>
        {symbol || '%'}
      </span>
    </div>
  );
};

export default DonutValue;
