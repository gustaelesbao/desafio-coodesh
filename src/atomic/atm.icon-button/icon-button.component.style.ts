/* eslint-disable no-shadow */
/* eslint-disable indent */
import styled, { css, keyframes } from 'styled-components';

import { Border, LineHeight, Radius, Spacing, Transition } from 'app/constants';
import { getButtonType } from 'utils/get-button-type';

import { IconButtonStyledProps } from './icon-button.d';

const getIconButtonTypeProps = (props) => {
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

export const IconButtonStyled = styled.button<IconButtonStyledProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${Spacing.Size12X};
  height: ${Spacing.Size12X};

  background-color: ${(props) => getIconButtonTypeProps(props)?.shapeColor};

  font-size: ${Spacing.Size6X};
  line-height: ${LineHeight.XNano};

  text-decoration: none;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: ${(props) => getIconButtonTypeProps(props)?.textColor};

  box-shadow: none;
  border-radius: ${(props) => (props.borderRadius ? Radius[props.borderRadius] : Radius.Small)};

  ${(props) => props.border && `box-shadow: ${Border.All} ${getIconButtonTypeProps(props)?.borderColor};`};

  overflow: hidden;

  user-select: none;
  outline: none;
  cursor: pointer;

  transition: background-color 0.3s ease-out, color 0.3s ease-out;

  ${(props) => props.disabled && ` cursor: not-allowed; opacity: 0.5; `}

  &:focus, &:focus-within, &:focus-within {
    background-color: ${(props) => getIconButtonTypeProps(props)?.hoverShapeColor};
    color: ${(props) => getIconButtonTypeProps(props)?.hoverTextColor};

    box-shadow: ${(props) =>
      props.border
        ? `${Border.All} ${getIconButtonTypeProps(props)?.borderColor}, 0 0 0 2px ${
            props.theme?.colors?.white
          }, 0 0 0 4px ${props.theme?.colors?.black}`
        : ` 0 0 0 2px ${props.theme?.colors?.white}, 0 0 0 4px ${props.theme?.colors?.black}`};
  }

  white-space: nowrap;

  transition: background ${Transition.Fast} ease-in-out, color ${Transition.Fast} ease-in-out;

  ${(props) =>
    !props.disabled &&
    !props.loading &&
    css`
      &:hover {
        background-color: ${(props) => getIconButtonTypeProps(props)?.hoverShapeColor};
        color: ${(props) => getIconButtonTypeProps(props)?.hoverTextColor};
      }
    `}

  ${(props) =>
    props.size === 'Large' &&
    css`
      height: ${Spacing.Size14X};
      width: ${Spacing.Size14X};
      font-size: ${Spacing.Size8X};
    `};

  ${(props) =>
    props.size === 'Small' &&
    css`
      height: ${Spacing.Size10X};
      width: ${Spacing.Size10X};
      font-size: ${Spacing.Size6X};
    `};

  ${(props) =>
    props.size === 'Nano' &&
    css`
      height: ${Spacing.Size9X};
      width: ${Spacing.Size9X};
      font-size: ${Spacing.Size5X};
    `};

  ${(props) =>
    props.size === 'XNano' &&
    css`
      height: ${Spacing.Size7X};
      width: ${Spacing.Size7X};
      font-size: ${Spacing.Size4X};
    `};
`;

export const IconButtonContentStyled = styled.div<IconButtonStyledProps>`
  transition: all 0.2s ease-in-out;
  opacity: ${(props) => (props.loading ? 0 : 1)};
  font-stretch: 100%;

  display: flex;
  gap: ${Spacing.Size2X};
  width: 1em;
  height: 1em;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const IconButtonLoaderWrapperStyled = styled.span<IconButtonStyledProps>`
  position: absolute;
  display: flex;
  width: ${LineHeight.XNano};
  height: ${LineHeight.XNano};
  font-size: ${LineHeight.Medium};

  stroke: ${(props) => getIconButtonTypeProps(props)?.hoverTextColor};

  opacity: ${(props) => (props.loading ? 1 : 0)};
`;
