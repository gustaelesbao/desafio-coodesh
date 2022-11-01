/* eslint-disable no-shadow */
/* eslint-disable indent */
import styled, { css } from 'styled-components';

import {
  Border,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Radius,
  Spacing,
  StaticColor,
  Transition,
} from 'app/constants';
import { getButtonType } from 'utils/get-button-type';

import { ButtonStyledProps } from './button.d';

const getButtonTypeProps = (props) => {
  if (!getButtonType(props?.kind)[props?.variation]) {
    if (props?.variation === 'solid') {
      return getButtonType(props?.kind).light;
    }

    if (props?.variation === 'light') {
      return getButtonType(props?.kind).solid;
    }
  }

  return getButtonType(props?.kind)[props?.variation];
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => (props.expanded ? '100%' : 'fit-content')};
  height: ${Spacing.Size12X};

  padding: ${Spacing.Size3X} ${Spacing.Size6X};

  background-color: ${(props) => getButtonTypeProps(props)?.shapeColor};

  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.Small};
  line-height: ${LineHeight.Medium};

  text-decoration: none;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: ${(props) => getButtonTypeProps(props)?.textColor};

  box-shadow: none;
  border-radius: ${(props) => (props.borderRadius ? Radius[props.borderRadius] : Radius.Small)};

  ${(props) => props.border && `box-shadow: ${Border.All} ${getButtonTypeProps(props)?.borderColor};`};

  overflow: hidden;

  user-select: none;
  outline: none;
  cursor: pointer;

  ${(props) => props.disabled && ` cursor: not-allowed; opacity: 0.5; `}

  &:focus, &:focus-within, &:focus-within {
    background-color: ${(props) => getButtonTypeProps(props)?.hoverShapeColor};
    color: ${(props) => getButtonTypeProps(props)?.hoverTextColor};

    box-shadow: ${(props) =>
      props.border
        ? `${Border.All} ${getButtonTypeProps(props)?.borderColor}, 0 0 0 2px ${StaticColor.White}, 0 0 0 4px ${
            StaticColor.Black
          }`
        : ` 0 0 0 2px ${StaticColor.White}, 0 0 0 4px ${StaticColor.Black}`};
  }

  white-space: nowrap;

  transition: background ${Transition.Fast} ease-in-out, color ${Transition.Fast} ease-in-out;

  ${(props) =>
    !props.disabled &&
    !props.loading &&
    css`
      &:hover {
        background-color: ${(props) => getButtonTypeProps(props)?.hoverShapeColor};
        color: ${(props) => getButtonTypeProps(props)?.hoverTextColor};
      }
    `}

  ${(props) =>
    props.size === 'Large' &&
    css`
      height: ${Spacing.Size14X};
      padding: ${Spacing.Size4X} ${Spacing.Size8X};
      font-size: ${FontSize.Small};
    `};

  ${(props) =>
    props.size === 'Small' &&
    css`
      height: ${Spacing.Size10X};
      padding: ${Spacing.Size2X} ${Spacing.Size4X};
      font-size: ${FontSize.XSmall};
    `};

  ${(props) =>
    props.size === 'Nano' &&
    css`
      height: ${Spacing.Size9X};
      padding: ${Spacing.Size2X} ${Spacing.Size4X};
      font-size: ${FontSize.XSmall};
    `};

  ${(props) =>
    props.size === 'XNano' &&
    css`
      height: ${Spacing.Size7X};
      padding: ${Spacing.Size1X} ${Spacing.Size2X};
      font-size: ${FontSize.Nano};
    `};

  ${(props) => props.noPadding && `padding: ${Spacing.None}`};
`;

export const ButtonContentStyled = styled.div<ButtonStyledProps>`
  transition: all 0.2s ease-in-out;
  opacity: ${(props) => (props.loading ? 0 : 1)};
  font-stretch: 100%;

  display: flex;
  gap: ${Spacing.Size2X};
  align-items: center;
  justify-content: center;

  & > svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

export const ButtonLoaderStyled = styled.span<ButtonStyledProps>`
  position: absolute;
  display: flex;
  width: fit-content;
  height: 56%;

  stroke: ${(props) => getButtonTypeProps(props)?.hoverTextColor};

  opacity: ${(props) => (props.loading ? 1 : 0)};
`;
