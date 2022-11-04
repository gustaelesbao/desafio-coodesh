import { css } from 'styled-components';

import { responsiveStyleProp } from 'utils/resposive-props';

import { TextAlignStyleProps } from './text-align.d';

export const TextAlignStyle = css<TextAlignStyleProps>`
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign}` : 'text-align: left;')};
  ${(props) => props.textAlignXxl && `text-align: ${props.textAlign}`};
  ${responsiveStyleProp('textAlign')};
`;
