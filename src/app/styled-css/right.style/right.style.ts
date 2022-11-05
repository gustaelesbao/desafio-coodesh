import { css } from 'styled-components';

import { responsiveStyleProp } from 'utils/resposive-props';

import { RightStyleProps } from './right';

export const RightStyle = css<RightStyleProps>`
  ${(props) => props.right && `right: ${props.right}`};
  ${(props) => props.rightXxl && `right: ${props.right}`};
  ${responsiveStyleProp('right')};
`;
