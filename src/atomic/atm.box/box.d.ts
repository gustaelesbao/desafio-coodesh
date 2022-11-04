import {
  FlexStyleProps,
  HeightStyleProps,
  MarginStyleProps,
  PaddingStyleProps,
  WidthStyleProps,
  OverflowStyleProps,
  PositionStyleProps,
  LeftStyleProps,
  TopStyleProps,
  RightStyleProps,
  BottomStyleProps,
  BorderRadiusStyleProps,
  DisplayStyleProps,
} from 'app/styled-css';

import { StaticColor } from 'app/constants';

export interface BoxProps
  extends PaddingStyleProps,
    MarginStyleProps,
    FlexStyleProps,
    DisplayStyleProps,
    WidthStyleProps,
    HeightStyleProps,
    PositionStyleProps,
    OverflowStyleProps,
    BorderRadiusStyleProps,
    React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;

  htmlTag?: 'article' | 'aside' | 'div' | 'footer' | 'header' | 'main' | 'span' | 'section' | 'nav';

  borderType?: 'All' | 'Left' | 'Top' | 'Right' | 'Bottom' | 'Smooth';
  borderColor?: string;
}
