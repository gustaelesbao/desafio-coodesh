import { Inter } from '@next/font/google';

export const FontFamily = {
  Primary: 'Inter, open-sans,sans-serif',
};

export const FontWeight = {
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
};

export const LineHeight = {
  XNano: '1em',
  Nano: '1.1em',
  XSmall: '1.25em',
  Small: '1.4em',
  Medium: '1.5em',
  Large: '1.6em',
};

export const Radius = {
  None: '0rem',
  Small: '0.25rem',
  Medium: '0.5rem',
  Large: '0.75rem',
  Rounded: '9999px',
  Circle: '50%',
};

export const Breakpoint = {
  XSmall: '479px',
  Small: '767px',
  Medium: '991px',
  Large: '1199px',
  XLarge: '1599px',
  XXLarge: '1600px',
};

export const ContainerMaxWidth = {
  XSmall: '440px',
  Small: '720px',
  Medium: '920px',
  Large: '1080px',
  XLarge: '1152px',
  XXLarge: '1600px',
};

export enum BreakpointTypes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
}

export const MediaQueries = {
  xs: `(max-width: ${Breakpoint.XSmall})`,
  sm: `(min-width: calc(${Breakpoint.XSmall} + 1px))`,
  md: `(min-width: calc(${Breakpoint.Small} + 1px))`,
  lg: `(min-width: calc(${Breakpoint.Medium} + 1px))`,
  xl: `(min-width: calc(${Breakpoint.Large} + 1px))`,
  xxl: `(min-width: ${Breakpoint.XXLarge})`,
};

export const MediaQueriesOnly = {
  xs: `(max-width: ${Breakpoint.XSmall})`,
  sm: `(min-width: calc(${Breakpoint.XSmall} + 1px)) and (max-width: ${Breakpoint.Small})`,
  md: `(min-width: calc(${Breakpoint.Small} + 1px)) and (max-width: ${Breakpoint.Medium})`,
  lg: `(min-width: calc(${Breakpoint.Medium} + 1px)) and (max-width: ${Breakpoint.Large})`,
  xl: `(min-width: calc(${Breakpoint.Large} + 1px)) and (max-width: ${Breakpoint.XLarge})`,
  xxl: `(min-width: ${Breakpoint.XXLarge})`,
};

export const Transition = {
  Instant: '0s',
  Fast: '0.2s',
  Normal: '0.4s',
  Slow: '0.8s',
  SuperSlow: '2s',
};

export const Border = {
  All: 'inset 0px 0px 0px 1px',
  Top: 'inset 0px 1px 0px 0px',
  Bottom: 'inset 0px -1px 0px',
  Left: 'inset 1px 0px 0px 0px',
  Right: 'inset -1px 0px 0px 0px',
};

export const Shadow = {
  Smooth: '0px 4px 20px rgba(0, 0, 0, 0.04)',
};

/** O Sistema de Spacing utiliza um número X base de 0.25rem, ou seja Spacing.X3 é igual a 0.75rem */
export const Spacing = {
  Size0X: '0',
  Size1px: '1px',
  Size3px: '3px',
  Size0_5X: '0.125rem',
  Size1X: '0.25rem',
  Size2X: '0.5rem',
  Size3X: '0.75rem',
  Size4X: '1rem',
  Size5X: '1.25rem',
  Size6X: '1.5rem',
  Size7X: '1.75rem',
  Size8X: '2rem',
  Size9X: '2.25rem',
  Size10X: '2.5rem',
  Size11X: '2.75rem',
  Size12X: '3rem',
  Size13X: '3.25rem',
  Size14X: '3.5rem',
  Size15X: '3.75rem',
  Size16X: '4rem',
  Size20X: '5rem',
  Size24X: '6rem',
  Size28X: '7rem',
  Size32X: '8rem',
  Size36X: '9rem',
  Size40X: '10rem',
  Size44X: '11rem',
  Size48X: '12rem',
  Size52X: '13rem',
  Size56X: '14rem',
  Size60X: '15rem',
  Size64X: '16rem',
  Size68X: '17rem',
  Size72X: '18rem',
  Size80X: '20rem',
  Size96X: '24rem',
  Size100X: '25rem',
  Size120X: '30rem',
  Size140X: '35rem',
  Size160X: '40rem',
  Size180X: '45rem',
  Size220X: '55rem',
  Size260X: '65rem',
};

export const Transparence = {
  0: '00',
  1: '03',
  2: '05',
  3: '08',
  4: '0A',
  5: '0D',
  6: '10',
  7: '12',
  8: '14',
  9: '17',
  10: '1A',
  11: '1D',
  12: '1F',
  16: '29',
  20: '33',
  24: '3D',
  28: '47',
  32: '52',
  36: '5C',
  40: '66',
  44: '70',
  48: '7A',
  52: '85',
  56: '8F',
  60: '99',
  64: 'A3',
  68: 'AE',
  72: 'B8',
  76: 'C2',
  80: 'CC',
  84: 'D7',
  88: 'E1',
  92: 'EB',
  96: 'F5',
  97: 'F8',
  98: 'FA',
  99: 'FC',
  100: 'FF',
};
