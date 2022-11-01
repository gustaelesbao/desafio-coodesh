import { BreakpointTypes } from 'atomic/constants';

export interface HiddenProps {
  hiddenXxl?: boolean;
  hiddenXl?: boolean;
  hiddenLg?: boolean;
  hiddenMd?: boolean;
  hiddenSm?: boolean;
  hiddenXs?: boolean;
}
export interface ReverseProps {
  reverse?: boolean;
  reverseXxl?: boolean;
  reverseXl?: boolean;
  reverseLg?: boolean;
  reverseMd?: boolean;
  reverseSm?: boolean;
  reverseXs?: boolean;

  reverseDirection?: 'row' | 'column';
  reverseDirection?: 'row' | 'column';
  reverseDirection?: 'row' | 'column';
  reverseDirection?: 'row' | 'column';
  reverseDirection?: 'row' | 'column';
  reverseDirection?: 'row' | 'column';
  reverseDirection?: 'row' | 'column';
}

export type Breakpoints = {
  [key in BreakpointTypes]?: {
    columns: number;
    breakpoint?: string;
    containerMaxWidth: string;
    gutter: string;
  };
};
