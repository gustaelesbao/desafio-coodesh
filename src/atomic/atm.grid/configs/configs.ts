import { Spacing, Breakpoint, BreakpointTypes, ContainerMaxWidth } from 'app/constants';

import { Breakpoints } from './configs.d';

export const gridConfigs: Breakpoints = {
  [BreakpointTypes.xxl]: {
    columns: 12,
    containerMaxWidth: `${ContainerMaxWidth.XXLarge}`,
    gutter: `${Spacing.Size4X}`,
  },
  [BreakpointTypes.xl]: {
    columns: 12,
    breakpoint: `${Breakpoint.XLarge}`,
    containerMaxWidth: `${ContainerMaxWidth.XLarge}`,
    gutter: `${Spacing.Size4X}`,
  },
  [BreakpointTypes.lg]: {
    columns: 12,
    breakpoint: `${Breakpoint.Large}`,
    containerMaxWidth: `${ContainerMaxWidth.Large}`,
    gutter: `${Spacing.Size4X}`,
  },
  [BreakpointTypes.md]: {
    columns: 12,
    breakpoint: `${Breakpoint.Medium}`,
    containerMaxWidth: `${ContainerMaxWidth.Medium}`,
    gutter: `${Spacing.Size4X}`,
  },
  [BreakpointTypes.sm]: {
    columns: 12,
    breakpoint: `${Breakpoint.Small}`,
    containerMaxWidth: `${ContainerMaxWidth.Small}`,
    gutter: `${Spacing.Size3X}`,
  },
  [BreakpointTypes.xs]: {
    columns: 12,
    breakpoint: `${Breakpoint.XSmall}`,
    containerMaxWidth: `${ContainerMaxWidth.XSmall}`,
    gutter: `${Spacing.Size3X}`,
  },
};
