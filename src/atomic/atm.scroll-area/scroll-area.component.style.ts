import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { Radius, Spacing, Transition, Transparence, StaticColor } from 'app/constants';
import styled, { css } from 'styled-components';

interface ScrollAreaRootStyledProps extends ScrollAreaPrimitive.ScrollAreaProps {
  width?: string;
  height?: string;
}

export const ScrollAreaRootStyled = styled(ScrollAreaPrimitive.Root)<ScrollAreaRootStyledProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  display: flex;
  flex: 1;
  box-sizing: border-box;

  border-radius: ${Radius.None};

  overflow: hidden;

  background-color: ${StaticColor.Transparent};

  ${(props) =>
    (props.type === 'auto' || props.type === 'always') &&
    css`
      padding-right: ${Spacing.Size2X};
    `}
`;

export const ScrollAreaViewportStyled = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: auto;

  border-radius: inherit;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  & > div {
    display: block !important;
    width: 100%;
  }
`;

interface ScrollAreaScrollbarStyledProps extends ScrollAreaPrimitive.ScrollAreaScrollbarProps {
  type?: 'auto' | 'always' | 'scroll' | 'hover';
  bgColor?: string;
  bgHoverColor?: string;
}

export const ScrollAreaScrollbarStyled = styled(ScrollAreaPrimitive.Scrollbar)<ScrollAreaScrollbarStyledProps>`
  display: flex;
  // ensures no selection
  user-select: none;
  // disable browser handling of all panning and zooming gestures on touch devices
  touch-action: none;
  padding: ${Spacing.Size0X};
  background: ${(props) => props.bgColor || `${StaticColor.Gray200}${Transparence[60]}`};
  transition: background 160ms ease-out;

  &:hover {
    background: ${(props) => props.bgHoverColor || StaticColor.Gray200};
  }

  &[data-orientation='vertical'] {
    width: ${Spacing.Size2X};
    bottom: 0;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: ${Spacing.Size2X};
    right: 0;
  }

  ${(props) =>
    props.type === 'auto' &&
    css`
      background: ${props.bgColor || StaticColor.Transparent};

      &[data-orientation='vertical'] {
        bottom: 0 !important;
      }

      &[data-orientation='horizontal'] {
        right: 0 !important;
      }
    `}
`;

interface ScrollAreaThumbStyledProps extends ScrollAreaPrimitive.ScrollAreaThumbProps {
  thumbColor?: string;
  thumbHoverColor?: string;
}

export const ScrollAreaThumbStyled = styled(ScrollAreaPrimitive.Thumb)<ScrollAreaThumbStyledProps>`
  flex: 1;
  background: ${(props) => StaticColor[props.thumbColor] || StaticColor.Gray400};
  border-radius: ${Spacing.Size2X};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: ${Spacing.Size10X};
    min-height: ${Spacing.Size10X};
  }

  &:hover > span {
    background: ${(props) => StaticColor[props.thumbHoverColor] || StaticColor.Gray500};
  }
`;

export const ScrollAreaThumbTouchStyled = styled.span<ScrollAreaThumbStyledProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  background: ${(props) => StaticColor[props.thumbColor] || StaticColor.Gray400};
  border-radius: ${Spacing.Size2X};

  transition: background ${Transition.Fast} ease-out;

  &:hover {
    background: ${(props) => StaticColor[props.thumbHoverColor] || StaticColor.Gray500};
  }
`;
interface ScrollAreaCornerStyledProps extends ScrollAreaPrimitive.ScrollAreaCornerProps {
  type?: 'auto' | 'always' | 'scroll' | 'hover';
}

export const ScrollAreaCornerStyled = styled(ScrollAreaPrimitive.Corner)<ScrollAreaCornerStyledProps>`
  background: ${StaticColor.Gray200};

  ${(props) =>
    props.type === 'auto' &&
    css`
      background: ${StaticColor.Transparent};
    `}
`;
