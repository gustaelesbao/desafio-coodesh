import styled, { DefaultTheme } from 'styled-components';

import { StaticColor, Radius } from 'app/constants';

interface ShimmerWrapperStyledProps {
  height?: string;
  width?: string;
  flex?: boolean;
}

export const ShimmerWrapperStyled = styled.div<ShimmerWrapperStyledProps>`
  position: relative;

  width: ${(props) => props.width || 'auto'};
  height: 0;
  padding-bottom: ${(props) => props.height || 'auto'};

  ${(props) => props.flex && 'flex: 1'}
`;

interface ShimmerStyledProps {
  width?: string;
  radius?: keyof typeof Radius;
  circle?: boolean;
  color?: string;
  highlightColor?: string;
}

export const ShimmerStyled = styled.div<ShimmerStyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  height: 100%;
  width: 100%;

  border-radius: ${(props) => (props.radius ? Radius[props.radius] : Radius.Small)};

  ${(props) => props.circle && 'border-radius: 50%'};

  animation: shimmer 2s linear infinite;
  background: linear-gradient(
    to right,
    ${(props) => (props.color ? props.color : StaticColor.Primary100)} 8%,
    ${(props) => (props.highlightColor ? props.highlightColor : StaticColor.Primary200)} 32%,
    ${(props) => (props.color ? props.color : StaticColor.Primary100)} 56%
  );
  background-size: 100vw 100%;

  @keyframes shimmer {
    0% {
      background-position: -100vw 0;
    }
    100% {
      background-position: 100vw 0;
    }
  }
`;
