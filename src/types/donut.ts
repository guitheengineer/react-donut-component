import { CSSProperties } from 'react';
export type DonutProps = Partial<{
  size: number;
  strokeWidth: number;
  color: string;
  className: string;
  children: any;
  animate: boolean;
  style: CSSProperties;
  classNameContainer: string;
  trackColor: string;
  styleContainer: CSSProperties;
  styleTrack: CSSProperties;
  styleIndicator: CSSProperties;
  linecap: 'butt' | 'round' | 'square';
  trackStrokeWidth: number;
  indicatorStrokeWidth: number;
  indicatorColor: string;
}>;
