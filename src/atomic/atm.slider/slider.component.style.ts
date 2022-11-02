import * as SliderPrimitive from '@radix-ui/react-slider';
import { Radius, Spacing, StaticColor, Transition } from 'app/constants';
import styled, { css } from 'styled-components';
import { SliderProps, SliderSizeType } from './slider.component';

export const SliderRootStyled = styled(SliderPrimitive.Root)<SliderProps>`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;

  &[data-orientation='horizontal'] {
    height: ${Spacing.Size5X};

    ${(props) =>
      props.size === 'Small' &&
      css`
        height: ${Spacing.Size3X};
      `}
  }

  &[data-orientation='vertical'] {
    flex-direction: column;
    width: ${Spacing.Size5X};
    height: 100%;

    ${(props) =>
      props.size === 'Small' &&
      css`
        width: ${Spacing.Size3X};
      `}
  }
`;

interface SliderTrackStyledProps extends SliderPrimitive.SliderTrackProps {
  size?: SliderSizeType;
}

export const SliderTrackStyled = styled(SliderPrimitive.Track)<SliderTrackStyledProps>`
  background-color: ${StaticColor.Gray200};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;

  &[data-orientation='horizontal'] {
    height: ${Spacing.Size2X};

    ${(props) =>
      props.size === 'Small' &&
      css`
        height: ${Spacing.Size1X};
      `}
  }

  &[data-orientation='vertical'] {
    width: ${Spacing.Size2X};

    ${(props) =>
      props.size === 'Small' &&
      css`
        width: ${Spacing.Size1X};
      `}
  }
`;

export const SliderRangeStyled = styled(SliderPrimitive.Range)`
  position: absolute;
  background-color: ${StaticColor.Primary500};
  border-radius: 9999px;
  height: 100%;
`;

interface SliderThumbStyledProps extends SliderPrimitive.SliderThumbProps {
  size?: SliderSizeType;
}

export const SliderThumbStyled = styled(SliderPrimitive.Thumb)<SliderThumbStyledProps>`
  all: unset;
  display: block;
  width: ${Spacing.Size5X};
  height: ${Spacing.Size5X};

  background-color: ${StaticColor.Primary700};

  border-radius: ${Radius.Circle};

  &:hover {
    background-color: ${StaticColor.Primary800};
  }

  &:focus {
    box-shadow: 0 0 0 ${Spacing.Size0_5X} ${StaticColor.Black};
  }

  ${(props) =>
    props.size === 'Small' &&
    css`
      width: ${Spacing.Size3X};
      height: ${Spacing.Size3X};
    `}
`;
