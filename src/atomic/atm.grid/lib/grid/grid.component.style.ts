import styled, { css } from 'styled-components';

import { PositionStyle } from 'app/styled-css/position.style/position.style';
import { BreakpointTypes, MediaQueries } from 'app/constants';
import { enumToArray } from 'utils/array';
import { transformToResponsiveProp } from 'utils/string';

import { gridConfigs } from '../../configs/configs';
import { GridProps } from './grid.d';

const reverseGridStyle = css`
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: Gridumn-reverse;
  flex-direction: Gridumn-reverse;
`;

const hiddenGridStyle = css`
  display: none;
`;

export const GridStyled = styled.div<GridProps>`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  max-width: ${(props) => (props.fluidXxl ? `100%` : gridConfigs?.xs?.containerMaxWidth)};

  ${PositionStyle};

  ${enumToArray(BreakpointTypes).map(
    (breakpoint) => css<GridProps>`
      ${`@media ${MediaQueries[breakpoint]}`} {
        ${(props) =>
          css<GridProps>`
            padding-left: ${props.noGutter ? 0 : `calc(${gridConfigs[breakpoint]?.gutter} * 2)`};
            padding-right: ${props.noGutter ? 0 : `calc(${gridConfigs[breakpoint]?.gutter} * 2)`};

            max-width: ${gridConfigs[breakpoint]?.containerMaxWidth};

            ${props.fluid && `max-width: 100%`};

            ${props[transformToResponsiveProp(breakpoint, 'fluid')] && `max-width: 100%;`};
            ${props[transformToResponsiveProp(breakpoint, 'reverse')] && reverseGridStyle};
            ${props[transformToResponsiveProp(breakpoint, 'hidden')] && hiddenGridStyle};
          `}
      }
    `
  )}
`;
