import styled, { css } from 'styled-components';

import { PositionStyle } from 'app/styled-css/position.style/position.style';
import { BreakpointTypes, MediaQueries } from 'app/constants';

import { gridConfigs } from '../../configs/configs';
import { ColProps } from './col.d';
import { enumToArray } from 'utils/array';
import { transformToResponsiveProp } from 'utils/string';

const reverseColStyle = css`
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
`;

const hiddenColStyle = css`
  display: none;
`;

export const ColStyled = styled.div<ColProps>`
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${(props) =>
    props.xxl &&
    css`
      -ms-flex-preferred-size: calc((100% / ${gridConfigs.xxl?.columns}) * (${props.xxl}));
      max-width: calc((100% / ${gridConfigs.xxl?.columns}) * (${props.xxl}));
      flex-basis: calc((100% / ${gridConfigs.xxl?.columns}) * (${props.xxl}));
    `};

  ${(props) =>
    props.xs &&
    !props.xxl &&
    css`
      -ms-flex-preferred-size: calc((100% / ${gridConfigs.xs?.columns}) * (${props.xs}));
      max-width: calc((100% / ${gridConfigs.xs?.columns}) * (${props.xs}));
      flex-basis: calc((100% / ${gridConfigs.xs?.columns}) * (${props.xs}));
    `};

  ${(props) =>
    props.all &&
    css`
      -ms-flex-preferred-size: calc((100% / ${gridConfigs.xxl?.columns}) * (${props.all}));
      max-width: calc((100% / ${gridConfigs.xxl?.columns}) * (${props.all}));
      flex-basis: calc((100% / ${gridConfigs.xxl?.columns}) * (${props.all}));
    `};

  ${(props) =>
    props.flex &&
    css`
      display: inline-flex;
      flex: auto;
      flex-basis: 100%;

      & > a {
        flex: auto;
      }
    `};

  ${PositionStyle};

  ${(props) => (props.hAlign ? `align-items: ${props.hAlign}` : 'align-items: initial;')};
  ${(props) => (props.vAlign ? `justify-content: ${props.vAlign}` : 'justify-content: stretch;')};
  ${(props) => props.reverse && reverseColStyle};

  ${enumToArray(BreakpointTypes).map(
    (breakpoint) => css<ColProps>`
      ${`@media only screen and ${MediaQueries[breakpoint]}`} {
        ${(props) =>
          css<ColProps>`
            ${props[breakpoint] <= gridConfigs[breakpoint]?.columns &&
            css<ColProps>`
              -ms-flex-preferred-size: calc((100% / ${gridConfigs[breakpoint]?.columns}) * (${props[breakpoint]}));
              max-width: calc((100% / ${gridConfigs[breakpoint]?.columns}) * (${props[breakpoint]}));
              flex-basis: calc((100% / ${gridConfigs[breakpoint]?.columns}) * (${props[breakpoint]}));
            `}

            ${props.noGutter
              ? `padding-left: 0; padding-right: 0;`
              : `padding-left: ${gridConfigs[breakpoint]?.gutter}; padding-right: ${gridConfigs[breakpoint]?.gutter};`};

            ${props.gutterTopBottom
              ? `padding-top: ${gridConfigs[breakpoint]?.gutter}; padding-bottom: ${gridConfigs[breakpoint]?.gutter};`
              : `padding-top: 0; padding-bottom: 0;`};

            padding-top: ${props.gutterTop ? `calc(${gridConfigs[breakpoint]?.gutter} * 2)` : 0};

            padding-bottom: ${props.gutterBottom ? `calc(${gridConfigs[breakpoint]?.gutter} * 2)` : 0};

            ${props[transformToResponsiveProp(breakpoint, 'hAlign')] &&
            `align-items: ${props[transformToResponsiveProp(breakpoint, 'hAlign')]}`};
            ${props[transformToResponsiveProp(breakpoint, 'vAlign')] &&
            `justify-content: ${props[transformToResponsiveProp(breakpoint, 'vAlign')]}`};

            ${props[transformToResponsiveProp(breakpoint, 'offset')]
              ? `margin-left: calc((100% / ${gridConfigs[breakpoint]?.columns}) * ${
                  props[transformToResponsiveProp(breakpoint, 'offset')]
                });`
              : 'margin-left: 0;'};

            ${props[transformToResponsiveProp(breakpoint, 'reverse')] && reverseColStyle};
            ${props[transformToResponsiveProp(breakpoint, 'hidden')] && hiddenColStyle};
          `}
      }
    `
  )}
`;
