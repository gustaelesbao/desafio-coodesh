import { css } from 'styled-components';

import { responsiveStyleProp } from 'utils/resposive-props';

import { WidthStyleProps } from './width';

export const WidthStyle = css<WidthStyleProps>`
  ${(props) => css`
    ${props.width ? `width: ${props.width}` : 'width: 100%;'};
    ${props.widthXxl && `width: ${props.widthXxl}`};
    ${responsiveStyleProp('width')};

    ${props.minWidth && `min-width: ${props.minWidth}`};
    ${props.minWidthXxl && `min-width: ${props.minWidthXxl}`};
    ${responsiveStyleProp('minWidth')};

    ${props.maxWidth && `max-width: ${props.maxWidth}`};
    ${props.maxWidthXxl && `max-width: ${props.maxWidthXxl}`};
    ${responsiveStyleProp('maxWidth')};
  `}
`;
