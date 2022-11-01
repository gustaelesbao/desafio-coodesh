import styled, { css } from 'styled-components';

import { FlexStyle } from 'app/styled-css/flex.style/flex.style';
import { HeightStyle } from 'app/styled-css/height.style/height.style';
import { MarginStyle } from 'app/styled-css/margin.style/margin.style';
import { PaddingStyle } from 'app/styled-css/padding.style/padding.style';
import { WidthStyle } from 'app/styled-css/width.style/width.style';

import { FlexProps } from './flex';

export const FlexStyled = styled('div').attrs<FlexProps>(({ htmlTag }) => ({
  as: `${htmlTag ? htmlTag : 'div'}`,
}))<FlexProps>`
  display: flex;

  ${PaddingStyle};
  ${MarginStyle};
  ${FlexStyle};
  ${WidthStyle};
  ${HeightStyle};
`;

export const FlexItemStyled = styled('div').attrs<FlexProps>(({ htmlTag }) => ({
  as: `${htmlTag ? htmlTag : 'div'}`,
}))<FlexProps>`
  display: flex;
  flex: 1;

  ${PaddingStyle};
  ${MarginStyle};
  ${FlexStyle};
  ${WidthStyle};
  ${HeightStyle};
`;
