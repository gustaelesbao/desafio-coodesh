import { css } from 'styled-components';

import { Radius } from 'app/constants';
import { responsiveStyleProp } from 'utils/resposive-props';

import { BorderRadiusStyleProps } from './border-radius.d';

export const BorderRadiusStyle = css<BorderRadiusStyleProps>`
  ${(props) => css`
    ${props.borderRadius ? `border-radius: ${props.borderRadius}` : `border-radius: ${Radius.Medium}`};
    ${props.borderRadiusXxl ? `border-radius: ${props.borderRadiusXxl}` : `border-radius: ${Radius.Medium}`};
    ${responsiveStyleProp('borderRadius')};
  `}
`;
