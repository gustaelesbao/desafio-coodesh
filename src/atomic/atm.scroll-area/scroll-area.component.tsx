import React from 'react';
import { DefaultTheme } from 'styled-components';
import {
  ScrollAreaCornerStyled,
  ScrollAreaRootStyled,
  ScrollAreaScrollbarStyled,
  ScrollAreaThumbStyled,
  ScrollAreaThumbTouchStyled,
  ScrollAreaViewportStyled,
} from './scroll-area.component.style';

interface ScrollAreaProps extends React.PropsWithChildren {
  scrollHideDelay?: number;
  type?: 'auto' | 'always' | 'scroll' | 'hover';
  width?: string;
  height?: string;
  bgColor?: string;
  bgHoverColor?: string;
  thumbColor?: string;
  thumbHoverColor?: string;
}

export const ScrollArea = ({ type = 'auto', ...props }: ScrollAreaProps) => {
  return (
    <ScrollAreaRootStyled width={props.width} height={props.height} type={type} scrollHideDelay={props.scrollHideDelay}>
      <ScrollAreaViewportStyled>{props.children}</ScrollAreaViewportStyled>
      <ScrollAreaScrollbarStyled
        bgColor={props.bgColor}
        bgHoverColor={props.bgHoverColor}
        type={type}
        orientation='vertical'
      >
        <ScrollAreaThumbStyled thumbColor={props.thumbColor} thumbHoverColor={props.thumbHoverColor}>
          <ScrollAreaThumbTouchStyled thumbColor={props.thumbColor} thumbHoverColor={props.thumbHoverColor} />
        </ScrollAreaThumbStyled>
      </ScrollAreaScrollbarStyled>
      <ScrollAreaScrollbarStyled
        bgColor={props.bgColor}
        bgHoverColor={props.bgHoverColor}
        type={type}
        orientation='horizontal'
      >
        <ScrollAreaThumbStyled thumbColor={props.thumbColor} thumbHoverColor={props.thumbHoverColor}>
          <ScrollAreaThumbTouchStyled thumbColor={props.thumbColor} thumbHoverColor={props.thumbHoverColor} />
        </ScrollAreaThumbStyled>
      </ScrollAreaScrollbarStyled>
      <ScrollAreaCornerStyled type={type} />
    </ScrollAreaRootStyled>
  );
};
