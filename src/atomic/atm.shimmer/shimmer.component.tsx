import React from 'react';

import { Radius } from 'app/constants';

import { ShimmerStyled, ShimmerWrapperStyled } from './shimmer.component.style';

interface ShimmerProps {
  width?: string;
  height?: string;
  radius?: keyof typeof Radius;
  color?: string;
  highlightColor?: string;
  flex?: boolean;
}

export const Shimmer: React.FC<ShimmerProps> = ({ height, width, radius, color, highlightColor, flex }) => {
  return (
    <ShimmerWrapperStyled height={height} width={width} flex={flex}>
      <ShimmerStyled radius={radius} color={color} highlightColor={highlightColor} />
    </ShimmerWrapperStyled>
  );
};
