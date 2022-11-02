import { css } from 'styled-components';

import { doubleResponsiveProps, responsiveStyleProp } from 'utils/resposive-props';

import { MarginStyleProps } from './margin';

export const MarginStyle = css<MarginStyleProps>`
  ${(props) => css`
    ${props.margin && `margin: ${props.margin}`};
    ${props.marginXxl && `margin: ${props.marginXxl}`};
    ${responsiveStyleProp('margin')};

    ${props.marginTop && `margin-top: ${props.marginTop}`};
    ${props.marginTopXxl && `margin-top: ${props.marginTopXxl}`};
    ${responsiveStyleProp('marginTop')};

    ${props.marginBottom && `margin-bottom: ${props.marginBottom}`};
    ${props.marginBottomXxl && `margin-bottom: ${props.marginBottomXxl}`};
    ${responsiveStyleProp('marginBottom')};

    ${props.marginRight && `margin-right: ${props.marginRight}`};
    ${props.marginRightXxl && `margin-right: ${props.marginRightXxl}`};
    ${responsiveStyleProp('marginRight')};

    ${props.marginLeft && `margin-left: ${props.marginLeft}`};
    ${props.marginLeftXxl && `margin-left: ${props.marginLeftXxl}`};
    ${responsiveStyleProp('marginLeft')};

    ${props.marginTopBottom && `margin-top: ${props.marginTopBottom}; margin-bottom: ${props.marginTopBottom}`};
    ${props.marginTopBottomXxl &&
    `margin-top: ${props.marginTopBottomXxl}; margin-bottom: ${props.marginTopBottomXxl}`};
    ${doubleResponsiveProps('marginTopBottom', 'margin-top', 'margin-bottom')};

    ${props.marginLeftRight && `margin-left: ${props.marginLeftRight}; margin-right: ${props.marginLeftRight}`};
    ${props.marginLeftRightXxl &&
    `margin-left: ${props.marginLeftRightXxl}; margin-right: ${props.marginLeftRightXxl}`};
    ${doubleResponsiveProps('marginLeftRight', 'margin-left', 'margin-right')};
  `}
`;
