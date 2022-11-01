import { css } from 'styled-components';

import { BreakpointTypes, MediaQueries } from 'app/constants';
import { stringToKebabCase, transformToResponsiveProp } from './string';
import { enumToArray } from './array';

/** Gera estilos para propriedades responsivas, usando como base os BreakpointTypes, essa função é utilizada para propriedade css únicas, como por exmplo: paddingTop.
 *
 * Esta função deve receber um valor do tipo string chamado propName: Nome da propriedade responsiva escrita em Camel case, exemplo: paddingTop;
 */
export const responsiveStyleProp = (propName = '') => {
  return enumToArray(BreakpointTypes).map(
    (breakpoint) => css`
      ${`@media ${MediaQueries[breakpoint]}`} {
        ${(props) =>
          props[transformToResponsiveProp(breakpoint, propName)] &&
          `${stringToKebabCase(propName)}: ${props[transformToResponsiveProp(breakpoint, propName)]}`};
      }
    `
  );
};

/** Gera estilos para propriedades responsivas, usando como base os BreakpointTypes, essa função é utilizada para propriedades duplas, como por exmplo: paddingTopBottom.
 *
 * Esta função pode receber 3 valores do tipo string:
 *  1º beforePropsName: Nome da propriedade responsiva escrita em Camel case, exemplo: paddingTopBottom;
 *  2º firstCSSProp: Nome da primeira propriedade css escrita em Kebab case, exemplo: padding-top;
 *  3º secondCSSProp: Nome da primeira propriedade css escrita em Kebab case, exemplo: padding-bottom;
 */
export const doubleResponsiveProps = (beforePropsName: string, firstCSSProp: string, secondCSSProp: string) => {
  return enumToArray(BreakpointTypes).map(
    (breakpoint) => css`
      ${`@media ${MediaQueries[breakpoint]}`} {
        ${(props) =>
          props[transformToResponsiveProp(breakpoint, beforePropsName)] &&
          `${firstCSSProp}: ${props[transformToResponsiveProp(breakpoint, beforePropsName)]}; ${secondCSSProp}: ${
            props[transformToResponsiveProp(breakpoint, beforePropsName)]
          }`};
      }
    `
  );
};
