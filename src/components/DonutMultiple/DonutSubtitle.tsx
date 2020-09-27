import React from 'react';

type Props = {
  name: string;
  color: string;
};

const DonutSubtitle = ({ name, color }: Props) => {
  return (
    <div className='Donut-multiple__subtitle'>
      <div
        className='Donut-multiple__block-color'
        style={{ backgroundColor: color }}
      ></div>
      <span className='Donut-multiple__subtitle-name'>{name}</span>
    </div>
  );
};

export default DonutSubtitle;
