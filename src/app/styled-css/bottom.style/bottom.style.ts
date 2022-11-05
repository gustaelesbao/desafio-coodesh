import { css } from 'styled-components';

import { responsiveStyleProp } from 'utils/resposive-props';

import { BottomStyleProps } from './bottom';

export const BottomStyle = css<BottomStyleProps>`
  ${(props) => props.bottom && `bottom: ${props.bottom}`};
  ${(props) => props.bottomXxl && `bottom: ${props.bottom}`};
  ${responsiveStyleProp('bottom')};
`;
