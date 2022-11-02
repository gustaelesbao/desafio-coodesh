import styled, { css } from 'styled-components';

import { FlexStyle } from 'app/styled-css/flex.style/flex.style';
import { HeightStyle } from 'app/styled-css/height.style/height.style';
import { MarginStyle } from 'app/styled-css/margin.style/margin.style';
import { PaddingStyle } from 'app/styled-css/padding.style/padding.style';
import { WidthStyle } from 'app/styled-css/width.style/width.style';

import { FlexProps } from './flex';
import { StaticColor } from 'app/constants';
import { OverflowStyle } from 'app/styled-css/overflow.style/overflow.style';
import { PositionStyle } from 'app/styled-css/position.style/position.style';

export const FlexStyled = styled('div').attrs<FlexProps>(({ htmlTag }) => ({
  as: `${htmlTag ? htmlTag : 'div'}`,
}))<FlexProps>`
  ${({ backgroundColor = StaticColor.Transparent }) => css`
    display: flex;

    background-color: ${backgroundColor};

    ${PaddingStyle};
    ${MarginStyle};
    ${FlexStyle};
    ${WidthStyle};
    ${HeightStyle};
    ${PositionStyle}
    ${OverflowStyle};
  `}
`;

export const FlexItemStyled = styled('div').attrs<FlexProps>(({ htmlTag }) => ({
  as: `${htmlTag ? htmlTag : 'div'}`,
}))<FlexProps>`
  ${({ backgroundColor = StaticColor.Transparent }) => css`
    display: flex;
    flex: 1;

    background-color: ${backgroundColor};

    ${PaddingStyle};
    ${MarginStyle};
    ${FlexStyle};
    ${WidthStyle};
    ${HeightStyle};
    ${PositionStyle}
    ${OverflowStyle};
  `}
`;
