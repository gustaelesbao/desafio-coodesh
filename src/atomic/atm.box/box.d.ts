import { DefaultTheme, DefaultTheme } from 'styled-components';

import { BorderRadiusStyleProps } from 'app/styled-css/border-radius.style/border-radius';
import { DisplayStyleProps } from 'app/styled-css/display.style/display';
import { FlexStyleProps } from 'app/styled-css/flex.style/flex';
import { HeightStyleProps } from 'app/styled-css/height.style/height';
import { MarginStyleProps } from 'app/styled-css/margin.style/margin';
import { PaddingStyleProps } from 'app/styled-css/padding.style/padding';
import { PositionStyleProps } from 'app/styled-css/position.style/position';
import { WidthStyleProps } from 'app/styled-css/width.style/width';
import { StaticColor } from 'app/constants';
import { OverflowStyleProps } from 'app/styled-css/overflow.style/overflow';

export interface BoxProps
  extends PaddingStyleProps,
    MarginStyleProps,
    FlexStyleProps,
    DisplayStyleProps,
    WidthStyleProps,
    HeightStyleProps,
    PositionStyleProps,
    OverflowStyleProps,
    BorderRadiusStyleProps {
  backgroundColor?: string;

  htmlTag?: 'article' | 'aside' | 'div' | 'footer' | 'header' | 'main' | 'span' | 'section' | 'nav';

  borderType?: 'All' | 'Left' | 'Top' | 'Right' | 'Bottom' | 'Smooth';
  borderColor?: string;
}
