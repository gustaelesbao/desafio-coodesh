import { css } from 'styled-components';

import { responsiveStyleProp } from 'utils/resposive-props';

import { LeftStyleProps } from './left';

export const LeftStyle = css<LeftStyleProps>`
  ${(props) => props.left && `left: ${props.left}`};
  ${(props) => props.leftXxl && `left: ${props.left}`};
  ${responsiveStyleProp('left')};
`;
