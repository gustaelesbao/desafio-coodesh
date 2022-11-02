import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { BreakpointTypes, MediaQueries, Radius, Spacing, StaticColor, Transparence } from 'app/constants';
import styled, { css, keyframes } from 'styled-components';
import { enumToArray } from 'utils/array';
import { transformToResponsiveProp } from 'utils/string';
import { gridConfigs } from '../atm.grid';
import { AlertDialogContentProps } from './alert-dialog.component';

const OverlayShowAnimation = keyframes`
  0% { opacity: 0 };
  100% { opacity: 1 };
`;

const ContentShowAnimation = keyframes`
  0% { opacity: 0; transform: translate(-50%, -48%) scale(.92) };
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1) };
`;

export const AlertDialogOverlayStyled = styled(AlertDialogPrimitive.Overlay)`
  background-color: ${StaticColor.Gray850}${Transparence[92]};
  position: fixed;
  inset: 0;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${OverlayShowAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  } ;
`;

export const AlertDialogContentWrapperStyled = styled.div`
  background-color: transparent;
  border-radius: ${Radius.Medium};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-height: 90vh;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${ContentShowAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:focus {
    outline: none;
  }

  ${enumToArray(BreakpointTypes).map(
    (breakpoint) => css<AlertDialogContentProps>`
      ${`@media only screen and ${MediaQueries[breakpoint]}`} {
        padding-left: calc(${gridConfigs[breakpoint]?.gutter} * 2);
        padding-right: calc(${gridConfigs[breakpoint]?.gutter} * 2);

        ${(props) =>
          css<AlertDialogContentProps>`
            ${props[transformToResponsiveProp(breakpoint, 'maxWidth')] &&
            `max-width: calc((${gridConfigs[breakpoint]?.containerMaxWidth} * (${
              props[transformToResponsiveProp(breakpoint, 'maxWidth')]
            } / ${gridConfigs[breakpoint]?.columns})) + (${gridConfigs[breakpoint]?.gutter} * 2));`};
          `}
      }
    `
  )}

  ${(props) =>
    props.maxWidth &&
    `max-width: calc((${gridConfigs.xxl?.containerMaxWidth} * (${props.maxWidth} / ${gridConfigs.xxl?.columns})) + (${gridConfigs.xxl?.gutter} * 2));`};
`;

export const AlertDialogContentStyled = styled(AlertDialogPrimitive.Content)`
  background-color: ${(props) => StaticColor.White};
  border-radius: ${Radius.Medium};

  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 90vh;
  padding: ${Spacing.Size8X};

  &:focus {
    outline: none;
  }
`;

export const AlertDialogTitleStyled = styled(AlertDialogPrimitive.Title)`
  margin-bottom: ${Spacing.Size6X};
`;

export const AlertDialogDescriptionStyled = styled(AlertDialogPrimitive.Description)`
  margin-top: -${Spacing.Size5X};
  margin-bottom: ${Spacing.Size6X};
`;
