import { DefaultTheme, DefaultTheme } from 'styled-components';

import { DisplayStyleProps } from 'app/styled-css/display.style/display';
import { FlexStyleProps } from 'app/styled-css/flex.style/flex';
import { HeightStyleProps } from 'app/styled-css/height.style/height';
import { MarginStyleProps } from 'app/styled-css/margin.style/margin';
import { PaddingStyleProps } from 'app/styled-css/padding.style/padding';
import { WidthStyleProps } from 'app/styled-css/width.style/width';
import React from 'react';
import { OverflowStyleProps } from 'app/styled-css/overflow.style/overflow';
import { PositionStyleProps } from 'app/styled-css/position.style/position';

export interface FlexProps
  extends PaddingStyleProps,
    MarginStyleProps,
    FlexStyleProps,
    WidthStyleProps,
    HeightStyleProps,
    PositionStyleProps,
    OverflowStyleProps,
    React.PropsWithChildren {
  backgroundColor?: string;

  htmlTag?: 'article' | 'aside' | 'div' | 'footer' | 'header' | 'main' | 'span' | 'section' | 'nav';
}
