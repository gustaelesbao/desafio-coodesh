import { css } from 'styled-components';

import { responsiveStyleProp } from 'utils/resposive-props';

import { FlexStyleProps } from './flex';

export const FlexStyle = css<FlexStyleProps>`
  ${(props) => css`
    ${props.alignContent && `align-content: ${props.alignContent}`};
    ${props.alignContentXxl && `align-content: ${props.alignContentXxl}`};
    ${responsiveStyleProp('alignContent')};

    ${props.alignItems && `align-items: ${props.alignItems}`};
    ${props.alignItemsXxl && `align-items: ${props.alignItemsXxl}`};
    ${responsiveStyleProp('alignItems')};

    ${props.alignSelf && `align-self: ${props.alignSelf}`};
    ${props.alignSelfXxl && `align-self: ${props.alignSelfXxl}`};
    ${responsiveStyleProp('alignSelf')};

    ${props.flex && `flex: ${props.flex}`};
    ${props.flexXxl && `flex: ${props.flexXxl}`};
    ${responsiveStyleProp('flex')};

    ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
    ${props.flexDirectionXxl && `flex-direction: ${props.flexDirectionXxl}`};
    ${responsiveStyleProp('flexDirection')};

    ${props.flexWrap && `flex-wrap: ${props.flexWrap}`};
    ${props.flexWrapXxl && `flex-wrap: ${props.flexWrapXxl}`};
    ${responsiveStyleProp('flexWrap')};

    ${props.flexBasis && `flex-basis: ${props.flexBasis}`};
    ${props.flexBasisXxl && `flex-basis: ${props.flexBasisXxl}`};
    ${responsiveStyleProp('flexBasis')};

    ${props.flexGrow && `flex-grow: ${props.flexGrow}`};
    ${props.flexGrowXxl && `flex-grow: ${props.flexGrowXxl}`};
    ${responsiveStyleProp('flexGrow')};

    ${props.flexFlow && `flex-flow: ${props.flexFlow}`};
    ${props.flexFlowXxl && `flex-flow: ${props.flexFlowXxl}`};
    ${responsiveStyleProp('flexFlow')};

    ${props.flexShrink && `flex-shrink: ${props.flexShrink}`};
    ${props.flexShrinkXxl && `flex-shrink: ${props.flexShrinkXxl}`};
    ${responsiveStyleProp('flexShrink')};

    ${props.flexBasis && `flex-basis: ${props.flexBasis}`};
    ${props.flexBasisXxl && `flex-basis: ${props.flexBasisXxl}`};
    ${responsiveStyleProp('flexBasis')};

    ${props.gap && `gap: ${props.gap}`};
    ${props.gapXxl && `gap: ${props.gapXxl}`};
    ${responsiveStyleProp('gap')};

    ${props.justifyContent && `justify-content: ${props.justifyContent}`};
    ${props.justifyContentXxl && `justify-content: ${props.justifyContentXxl}`};
    ${responsiveStyleProp('justifyContent')};

    ${props.order && `order: ${props.order}`};
    ${props.orderXxl && `order: ${props.orderXxl}`};
    ${responsiveStyleProp('order')};
  `}
`;
