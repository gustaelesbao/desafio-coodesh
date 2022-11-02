import { css } from 'styled-components';

import { doubleResponsiveProps, responsiveStyleProp } from 'utils/resposive-props';

import { PaddingStyleProps } from './padding';

export const PaddingStyle = css<PaddingStyleProps>`
  ${(props) => css`
    ${props.padding && `padding: ${props.padding}`};
    ${props.paddingXxl && `padding: ${props.paddingXxl}`};
    ${responsiveStyleProp('padding')};

    ${props.paddingTop && `padding-top: ${props.paddingTop}`};
    ${props.paddingTopXxl && `padding: ${props.paddingTopXxl}`};
    ${responsiveStyleProp('paddingTop')};

    ${props.paddingBottom && `padding-bottom: ${props.paddingBottom}`};
    ${props.paddingBottomXxl && `padding: ${props.paddingBottomXxl}`};
    ${responsiveStyleProp('paddingBottom')};

    ${props.paddingRight && `padding-right: ${props.paddingRight}`};
    ${props.paddingRightXxl && `padding: ${props.paddingRightXxl}`};
    ${responsiveStyleProp('paddingRight')};

    ${props.paddingLeft && `padding-left: ${props.paddingLeft}`};
    ${props.paddingLeftXxl && `padding: ${props.paddingLeftXxl}`};
    ${responsiveStyleProp('paddingLeft')};

    ${props.paddingTopBottom && `padding-top: ${props.paddingTopBottom}; padding-bottom: ${props.paddingTopBottom}`};
    ${props.paddingTopBottomXxl &&
    `padding-top: ${props.paddingTopBottomXxl}; padding-bottom: ${props.paddingTopBottomXxl}`};
    ${doubleResponsiveProps('paddingTopBottom', 'padding-top', 'padding-bottom')};

    ${props.paddingLeftRight && `padding-left: ${props.paddingLeftRight}; padding-right: ${props.paddingLeftRight}`};
    ${props.paddingLeftRightXxl &&
    `padding-left: ${props.paddingLeftRightXxl}; padding-right: ${props.paddingLeftRightXxl}`};
    ${doubleResponsiveProps('paddingLeftRight', 'padding-left', 'padding-right')};
  `}
`;
