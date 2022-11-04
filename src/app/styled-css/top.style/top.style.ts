import { css } from 'styled-components';

import { responsiveStyleProp } from 'utils/resposive-props';

import { TopStyleProps } from './top';

export const TopStyle = css<TopStyleProps>`
  ${(props) => props.top && `top: ${props.top}`};
  ${(props) => props.topXxl && `top: ${props.top}`};
  ${responsiveStyleProp('top')};
`;
