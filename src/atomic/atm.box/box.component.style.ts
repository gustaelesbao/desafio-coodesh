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
  BorderRadiusStyle,
  DisplayStyle,
} from 'app/styled-css';

import { BoxProps } from './box';
import { Border, StaticColor } from 'app/constants';

export const BoxStyled = styled.div.attrs<BoxProps>(({ htmlTag }) => ({
  as: `${htmlTag ? htmlTag : 'div'}`,
}))<BoxProps>`
  ${({ backgroundColor = StaticColor.White }) => css<BoxProps>`
    background-color: ${backgroundColor};

    ${(props) => props.borderType === 'Smooth' && `box-shadow: ${props.borderType};`}
    ${(props) =>
      props.borderType &&
      props.borderType !== 'Smooth' &&
      !props.borderColor &&
      `box-shadow: ${Border[props.borderType]} ${StaticColor.Gray150};`}
    ${(props) =>
      props.borderType &&
      props.borderType !== 'Smooth' &&
      props.borderColor &&
      `box-shadow: ${props.borderType} ${props.borderColor};`}

    ${BorderRadiusStyle};
    ${PaddingStyle};
    ${MarginStyle};
    ${FlexStyle};
    ${DisplayStyle};
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
