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
} from 'app/styled-css';

import React from 'react';

export interface FlexProps
  extends PaddingStyleProps,
    MarginStyleProps,
    FlexStyleProps,
    WidthStyleProps,
    HeightStyleProps,
    PositionStyleProps,
    LeftStyleProps,
    RightStyleProps,
    TopStyleProps,
    BottomStyleProps,
    OverflowStyleProps,
    React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;

  htmlTag?: 'article' | 'aside' | 'div' | 'footer' | 'header' | 'main' | 'span' | 'section' | 'nav';
}
