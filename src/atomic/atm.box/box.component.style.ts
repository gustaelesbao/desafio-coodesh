import styled, { css } from 'styled-components';

import { BorderRadiusStyle } from 'app/styled-css/border-radius.style/border-radius.style';
import { DisplayStyle } from 'app/styled-css/display.style/display.style';
import { FlexStyle } from 'app/styled-css/flex.style/flex.style';
import { HeightStyle } from 'app/styled-css/height.style/height.style';
import { MarginStyle } from 'app/styled-css/margin.style/margin.style';
import { PaddingStyle } from 'app/styled-css/padding.style/padding.style';
import { PositionStyle } from 'app/styled-css/position.style/position.style';
import { WidthStyle } from 'app/styled-css/width.style/width.style';

import { BoxProps } from './box';
import { StaticColor } from 'app/constants';

export const BoxStyled = styled('div').attrs<BoxProps>(({ htmlTag }) => ({
  as: `${htmlTag ? htmlTag : 'div'}`,
}))<BoxProps>`
  ${({ backgroundColor = StaticColor.White }) => css`
    background-color: ${backgroundColor};

    ${BorderRadiusStyle};
    ${PaddingStyle};
    ${MarginStyle};
    ${FlexStyle};
    ${DisplayStyle};
    ${WidthStyle};
    ${HeightStyle};
    ${PositionStyle}
  `}
`;
