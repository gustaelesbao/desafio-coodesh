import styled, { css } from 'styled-components';

import {
  FlexStyle,
  HeightStyle,
  MarginStyle,
  PaddingStyle,
  WidthStyle,
  OverflowStyle,
  PositionStyle,
  LeftStyle,
  TopStyle,
  RightStyle,
  BottomStyle,
} from 'app/styled-css';

import { StaticColor } from 'app/constants';
import { FlexProps } from './flex';

export const FlexStyled = styled.div.attrs<FlexProps>(({ htmlTag }) => ({
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
    ${PositionStyle};
    ${LeftStyle};
    ${TopStyle};
    ${RightStyle};
    ${BottomStyle};
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
    ${PositionStyle};
    ${LeftStyle};
    ${TopStyle};
    ${RightStyle};
    ${BottomStyle};
    ${OverflowStyle};
  `}
`;
