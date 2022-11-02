import styled, { css } from 'styled-components';

import { PositionStyle } from 'app/styled-css/position.style/position.style';
import { BreakpointTypes, MediaQueries } from 'app/constants';
import { enumToArray } from 'utils/array';
import { transformToResponsiveProp } from 'utils/string';

import { gridConfigs } from '../../configs/configs';
import { RowProps } from './row.d';

const reverseRowStyle = css`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
`;

const reverseColStyle = css`
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
`;

const hiddenRowStyle = css`
  display: none;
`;

export const RowStyled = styled.div<RowProps>`
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  margin-left: -${gridConfigs.xs?.gutter};
  margin-right: -${gridConfigs.xs?.gutter};

  ${PositionStyle};

  ${(props) => props.reverse && (props.reverseDirection === 'column' ? reverseColStyle : reverseRowStyle)};

  ${enumToArray(BreakpointTypes).map(
    (breakpoint) => css<RowProps>`
      ${`@media only screen and ${MediaQueries[breakpoint]}`} {
        ${(props) =>
          css`
            margin-left: -${gridConfigs[breakpoint]?.gutter};
            margin-right: -${gridConfigs[breakpoint]?.gutter};

            ${props[transformToResponsiveProp(breakpoint, 'hidden')] && hiddenRowStyle};

            ${props[transformToResponsiveProp(breakpoint, 'hAlign')] &&
            `justify-content: ${props[transformToResponsiveProp(breakpoint, 'hAlign')]}`};
            ${props[transformToResponsiveProp(breakpoint, 'vAlign')] &&
            `align-items: ${props[transformToResponsiveProp(breakpoint, 'vAlign')]}`};

            ${props[transformToResponsiveProp(breakpoint, 'reverse')] &&
            (props[transformToResponsiveProp(breakpoint, 'reverseDirection')] === 'column'
              ? reverseColStyle
              : reverseRowStyle)};
          `}
      }
    `
  )}
`;
