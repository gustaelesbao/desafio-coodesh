// eslint-disable-next-line import/no-named-as-default

import styled, { css } from 'styled-components';

import { Spacing, Radius, FontSize, Border, StaticColor, LineHeight, FontFamily, FontWeight } from 'app/constants';
import { InputHTMLAttributes } from 'react';

interface InputWrapperProps {
  isFocused?: boolean;
  inputSize?: 'XNano' | 'Nano' | 'Small' | 'Medium' | 'Large';
}

export const InputWrapperStyled = styled.div<InputWrapperProps>`
  font-size: ${FontSize.XSmall};

  width: 100%;
  height: ${Spacing.Size12X};
  overflow: hidden;
  padding: ${Spacing.Size0X};
  border-radius: ${Radius.Small};

  background-color: ${StaticColor.Gray150};

  display: flex;
  align-items: center;

  position: relative;

  cursor: text;

  ${(props) =>
    props.inputSize === 'Large' &&
    css`
      height: ${Spacing.Size14X};
      font-size: ${FontSize.Small};
    `};

  ${(props) =>
    props.inputSize === 'Small' &&
    css`
      height: ${Spacing.Size10X};
      font-size: ${FontSize.XSmall};
    `};

  ${(props) =>
    props.inputSize === 'Nano' &&
    css`
      height: ${Spacing.Size9X};
      font-size: ${FontSize.XSmall};
    `};

  ${(props) =>
    props.inputSize === 'XNano' &&
    css`
      height: ${Spacing.Size7X};
      font-size: ${FontSize.Nano};
    `};

  ${(props) =>
    props.isFocused &&
    css`
      background-color: ${StaticColor.White};
      box-shadow: ${Border.All} ${StaticColor.Primary500};
    `}
`;

interface InputStyledProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: boolean;
  textAlign?: 'left' | 'right' | 'center';
  inputSize?: 'XNano' | 'Nano' | 'Small' | 'Medium' | 'Large';
}

export const InputStyled = styled.input<InputStyledProps>`
  width: 100%;
  height: ${Spacing.Size12X};

  padding: ${Spacing.Size3X} ${Spacing.Size5X};

  ${(props) =>
    props.icon &&
    css`
      padding-left: calc(${Spacing.Size5X} + ${LineHeight.Medium} + ${Spacing.Size2X});
    `}

  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.XSmall};
  line-height: ${LineHeight.Medium};

  color: ${StaticColor.Gray800};

  background-color: ${StaticColor.Transparent};

  &::placeholder {
    color: ${StaticColor.Gray600};
  }

  ${(props) =>
    props.inputSize === 'Large' &&
    css`
      height: ${Spacing.Size14X};
      padding: ${Spacing.Size4X} ${Spacing.Size6X};
      font-size: ${FontSize.Small};

      ${props.icon &&
      css`
        padding-left: calc(${Spacing.Size6X} + ${LineHeight.Medium} + ${Spacing.Size2X});
      `}
    `};

  ${(props) =>
    props.inputSize === 'Small' &&
    css`
      height: ${Spacing.Size10X};
      padding: ${Spacing.Size2X} ${Spacing.Size4X};
      font-size: ${FontSize.XSmall};

      ${props.icon &&
      css`
        padding-left: calc(${Spacing.Size4X} + ${LineHeight.Medium} + ${Spacing.Size2X});
      `}
    `};

  ${(props) =>
    props.inputSize === 'Nano' &&
    css`
      height: ${Spacing.Size9X};
      padding: ${Spacing.Size2X} ${Spacing.Size4X};
      font-size: ${FontSize.XSmall};

      ${props.icon &&
      css`
        padding-left: calc(${Spacing.Size4X} + ${LineHeight.Medium} + ${Spacing.Size2X});
      `}
    `};

  ${(props) =>
    props.inputSize === 'XNano' &&
    css`
      height: ${Spacing.Size7X};
      padding: ${Spacing.Size1X} ${Spacing.Size2X};
      font-size: ${FontSize.Nano};

      ${props.icon &&
      css`
        padding-left: calc(${Spacing.Size2X} + ${LineHeight.Medium} + ${Spacing.Size1X});
      `}
    `};
`;

export const IconStyled = styled.span<InputWrapperProps>`
  display: block;
  min-width: ${LineHeight.Medium};
  width: ${LineHeight.Medium};
  min-height: ${LineHeight.Medium};
  height: ${LineHeight.Medium};

  color: ${StaticColor.Gray500};

  position: absolute;
  top: 50%;
  left: ${Spacing.Size5X};

  transform: translateY(-50%);

  &,
  * {
    transition: none;
  }

  ${(props) => props.isFocused && `color: ${StaticColor.Primary500}`};

  & > svg {
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.inputSize === 'Large' &&
    css`
      left: ${Spacing.Size6X};
    `};

  ${(props) =>
    props.inputSize === 'Small' &&
    css`
      left: ${Spacing.Size4X};
    `};

  ${(props) =>
    props.inputSize === 'Nano' &&
    css`
      left: ${Spacing.Size4X};
    `};

  ${(props) =>
    props.inputSize === 'XNano' &&
    css`
      left: ${Spacing.Size2X};
    `};
`;
