import { css } from 'styled-components';

import { responsiveStyleProp } from 'redesign/utils/resposive-props';

import { DisplayStyleProps } from './display';

export const DisplayStyle = css<DisplayStyleProps>`
  ${(props) => props.display && `display: ${props.display}`};
  ${(props) => props.displayXxl && `display: ${props.display}`};
  ${responsiveStyleProp('display')};
`;
