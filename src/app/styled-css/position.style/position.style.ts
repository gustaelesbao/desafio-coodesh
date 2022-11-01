import { css } from 'styled-components';

import { responsiveStyleProp } from 'redesign/utils/resposive-props';

import { PositionStyleProps } from './position';

export const PositionStyle = css<PositionStyleProps>`
  ${(props) => (props.position ? `position: ${props.position}` : 'position: static;')};
  ${(props) => props.positionXxl && `position: ${props.position}`};
  ${responsiveStyleProp('position')};
`;
