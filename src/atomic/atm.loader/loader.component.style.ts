import { Spacing, StaticColor } from 'app/constants';
import styled, { keyframes } from 'styled-components';
import { LoaderProps } from './loader.component';

export const LoaderRingWrapperStyled = styled.div<LoaderProps>`
  ${(props) =>
    props.size
      ? `width: ${props.size}; height: ${props.size};`
      : `width: ${Spacing.Size8X}; height: ${Spacing.Size8X};`}
  display: inline-block;
  background: ${StaticColor.Transparent};
`;

export const LoaderRingStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

const RingAnimation = keyframes`
  0% { transform: translate(-50%,-50%) rotate(0deg); }
  100% { transform: translate(-50%,-50%) rotate(360deg); }
`;

export const LoaderDashStyled = styled.div<LoaderProps>`
  position: absolute;
  width: 60%;
  height: 60%;

  border-style: solid;
  border-width: ${(props) => (props.weight ? props.weight : Spacing.Size1X)};
  border-color: ${(props) => (props.color ? props.color : StaticColor.Primary500)};
  border-top-color: transparent;
  border-radius: 50%;

  animation: ${RingAnimation} 1s linear infinite;
  top: 50%;
  left: 50%;

  box-sizing: content-box;
`;
