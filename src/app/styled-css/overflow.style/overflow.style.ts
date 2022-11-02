import { css } from 'styled-components';

import { responsiveStyleProp } from 'utils/resposive-props';

import { OverflowStyleProps } from './overflow.d';

export const OverflowStyle = css<OverflowStyleProps>`
  ${(props) => css`
    ${props.overflow ? `overflow: ${props.overflow}` : 'overflow: unset;'};
    ${props.overflowXxl && `overflow: ${props.overflowXxl}`};
    ${responsiveStyleProp('overflow')};
  `}
`;
