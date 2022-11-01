import { css } from 'styled-components';

import { responsiveStyleProp } from 'redesign/utils/resposive-props';

import { HeightStyleProps } from './height';

export const HeightStyle = css<HeightStyleProps>`
  ${(props) => css`
    ${props.height ? `height: ${props.height}` : 'height: auto;'};
    ${props.heightXxl && `height: ${props.heightXxl}`};
    ${responsiveStyleProp('height')};

    ${props.minHeight && `min-height: ${props.minHeight}`};
    ${props.minHeightXxl && `min-height: ${props.minHeightXxl}`};
    ${responsiveStyleProp('minHeight')};

    ${props.maxHeight && `max-height: ${props.maxHeight}`};
    ${props.maxHeightXxl && `max-height: ${props.maxHeightXxl}`};
    ${responsiveStyleProp('maxHeight')};
  `}
`;
