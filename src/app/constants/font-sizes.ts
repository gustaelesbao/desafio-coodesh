/* eslint-disable no-unused-vars */

import { Breakpoint } from './constants';

/* eslint-disable no-shadow */
export enum FontSizes {
  XNano = 'XNano',
  Nano = 'Nano',
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge',
  XXLarge = 'XXLarge',
  Mega = 'Mega',
}

type ResponsiveFontSizes = {
  [key in FontSizes]?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xxl?: string;
  };
};

const fontSizes: ResponsiveFontSizes = {
  [FontSizes.XNano]: {
    xs: '0.625rem',
    sm: '0.625rem',
    md: '0.625rem',
    lg: '0.625rem',
    xl: '0.625rem',
    xxl: '0.625rem',
  },
  [FontSizes.Nano]: {
    xs: '0.75rem',
    sm: '0.75rem',
    md: '0.75rem',
    lg: '0.75rem',
    xl: '0.75rem',
    xxl: '0.75rem',
  },
  [FontSizes.XSmall]: {
    xs: '0.875rem',
    sm: '0.875rem',
    md: '0.875rem',
    lg: '0.875rem',
    xl: '0.875rem',
    xxl: '0.875rem',
  },
  [FontSizes.Small]: {
    xs: '1rem',
    sm: '1rem',
    md: '1rem',
    lg: '1rem',
    xl: '1rem',
    xxl: '1rem',
  },
  [FontSizes.Medium]: {
    xs: '1rem',
    sm: '1rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.125rem',
    xxl: '1.125rem',
  },
  [FontSizes.Large]: {
    xs: '1.175rem',
    sm: '1.25rem',
    md: '1.25rem',
    lg: '1.375rem',
    xl: '1.375rem',
    xxl: '1.375rem',
  },
  [FontSizes.XLarge]: {
    xs: '1.375rem',
    sm: '1.5rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    xxl: '1.75rem',
  },
  [FontSizes.XXLarge]: {
    xs: '1.5rem',
    sm: '1.75rem',
    md: '1.75rem',
    lg: '2rem',
    xl: '2rem',
    xxl: '2rem',
  },
  [FontSizes.Mega]: {
    xs: '3rem',
    sm: '3.5rem',
    md: '3.5rem',
    lg: '4rem',
    xl: '4rem',
    xxl: '4rem',
  },
};

export const FontSize = {
  XNano: `
    ${fontSizes.XNano?.xl};

    @media only screen and (min-width: calc(${Breakpoint.Large} + 1px)) {
      font-size: ${fontSizes.XNano?.xl};
    }

    @media only screen and (max-width: ${Breakpoint.Large}) and (min-width: calc(${Breakpoint.Medium} + 1px)) {
      font-size: ${fontSizes.XNano?.lg};
    }

    @media only screen and (max-width: ${Breakpoint.Medium}) and (min-width: calc(${Breakpoint.Small} + 1px)) {
      font-size: ${fontSizes.XNano?.md};
    }

    @media only screen and (max-width: ${Breakpoint.Small}) and (min-width: calc(${Breakpoint.XSmall} + 1px)) {
      font-size: ${fontSizes.XNano?.sm};
    }

    @media only screen and (max-width: ${Breakpoint.XSmall}) {
      font-size: ${fontSizes.XNano?.xs};
    }
  `,

  Nano: `
    ${fontSizes.Nano?.xl};

    @media only screen and (min-width: calc(${Breakpoint.Large} + 1px)) {
      font-size: ${fontSizes.Nano?.xl};
    }

    @media only screen and (max-width: ${Breakpoint.Large}) and (min-width: calc(${Breakpoint.Medium} + 1px)) {
      font-size: ${fontSizes.Nano?.lg};
    }

    @media only screen and (max-width: ${Breakpoint.Medium}) and (min-width: calc(${Breakpoint.Small} + 1px)) {
      font-size: ${fontSizes.Nano?.md};
    }

    @media only screen and (max-width: ${Breakpoint.Small}) and (min-width: calc(${Breakpoint.XSmall} + 1px)) {
      font-size: ${fontSizes.Nano?.sm};
    }

    @media only screen and (max-width: ${Breakpoint.XSmall}) {
      font-size: ${fontSizes.Nano?.xs};
    }
  `,

  XSmall: `
    ${fontSizes.XSmall?.xl};

    @media only screen and (min-width: calc(${Breakpoint.Large} + 1px)) {
      font-size: ${fontSizes.XSmall?.xl};
    }

    @media only screen and (max-width: ${Breakpoint.Large}) and (min-width: calc(${Breakpoint.Medium} + 1px)) {
      font-size: ${fontSizes.XSmall?.lg};
    }

    @media only screen and (max-width: ${Breakpoint.Medium}) and (min-width: calc(${Breakpoint.Small} + 1px)) {
      font-size: ${fontSizes.XSmall?.md};
    }

    @media only screen and (max-width: ${Breakpoint.Small}) and (min-width: calc(${Breakpoint.XSmall} + 1px)) {
      font-size: ${fontSizes.XSmall?.sm};
    }

    @media only screen and (max-width: ${Breakpoint.XSmall}) {
      font-size: ${fontSizes.XSmall?.xs};
    }
  `,

  Small: `
    ${fontSizes.Small?.xl};

    @media only screen and (min-width: calc(${Breakpoint.Large} + 1px)) {
      font-size: ${fontSizes.Small?.xl};
    }

    @media only screen and (max-width: ${Breakpoint.Large}) and (min-width: calc(${Breakpoint.Medium} + 1px)) {
      font-size: ${fontSizes.Small?.lg};
    }

    @media only screen and (max-width: ${Breakpoint.Medium}) and (min-width: calc(${Breakpoint.Small} + 1px)) {
      font-size: ${fontSizes.Small?.md};
    }

    @media only screen and (max-width: ${Breakpoint.Small}) and (min-width: calc(${Breakpoint.XSmall} + 1px)) {
      font-size: ${fontSizes.Small?.sm};
    }

    @media only screen and (max-width: ${Breakpoint.XSmall}) {
      font-size: ${fontSizes.Small?.xs};
    }
  `,

  Medium: `
    ${fontSizes.Medium?.xl};

    @media only screen and (min-width: calc(${Breakpoint.Large} + 1px)) {
      font-size: ${fontSizes.Medium?.xl};
    }

    @media only screen and (max-width: ${Breakpoint.Large}) and (min-width: calc(${Breakpoint.Medium} + 1px)) {
      font-size: ${fontSizes.Medium?.lg};
    }

    @media only screen and (max-width: ${Breakpoint.Medium}) and (min-width: calc(${Breakpoint.Small} + 1px)) {
      font-size: ${fontSizes.Medium?.md};
    }

    @media only screen and (max-width: ${Breakpoint.Small}) and (min-width: calc(${Breakpoint.XSmall} + 1px)) {
      font-size: ${fontSizes.Medium?.sm};
    }

    @media only screen and (max-width: ${Breakpoint.XSmall}) {
      font-size: ${fontSizes.Medium?.xs};
    }
  `,

  Large: `
    ${fontSizes.Large?.xl};

    @media only screen and (min-width: calc(${Breakpoint.Large} + 1px)) {
      font-size: ${fontSizes.Large?.xl};
    }

    @media only screen and (max-width: ${Breakpoint.Large}) and (min-width: calc(${Breakpoint.Medium} + 1px)) {
      font-size: ${fontSizes.Large?.lg};
    }

    @media only screen and (max-width: ${Breakpoint.Medium}) and (min-width: calc(${Breakpoint.Small} + 1px)) {
      font-size: ${fontSizes.Large?.md};
    }

    @media only screen and (max-width: ${Breakpoint.Small}) and (min-width: calc(${Breakpoint.XSmall} + 1px)) {
      font-size: ${fontSizes.Large?.sm};
    }

    @media only screen and (max-width: ${Breakpoint.XSmall}) {
      font-size: ${fontSizes.Large?.xs};
    }
  `,

  XLarge: `
    ${fontSizes.XLarge?.xl};

    @media only screen and (min-width: calc(${Breakpoint.Large} + 1px)) {
      font-size: ${fontSizes.XLarge?.xl};
    }

    @media only screen and (max-width: ${Breakpoint.Large}) and (min-width: calc(${Breakpoint.Medium} + 1px)) {
      font-size: ${fontSizes.XLarge?.lg};
    }

    @media only screen and (max-width: ${Breakpoint.Medium}) and (min-width: calc(${Breakpoint.Small} + 1px)) {
      font-size: ${fontSizes.XLarge?.md};
    }

    @media only screen and (max-width: ${Breakpoint.Small}) and (min-width: calc(${Breakpoint.XSmall} + 1px)) {
      font-size: ${fontSizes.XLarge?.sm};
    }

    @media only screen and (max-width: ${Breakpoint.XSmall}) {
      font-size: ${fontSizes.XLarge?.xs};
    }
  `,

  XXLarge: `
    ${fontSizes.XXLarge?.xl};

    @media only screen and (min-width: calc(${Breakpoint.Large} + 1px)) {
      font-size: ${fontSizes.XXLarge?.xl};
    }

    @media only screen and (max-width: ${Breakpoint.Large}) and (min-width: calc(${Breakpoint.Medium} + 1px)) {
      font-size: ${fontSizes.XXLarge?.lg};
    }

    @media only screen and (max-width: ${Breakpoint.Medium}) and (min-width: calc(${Breakpoint.Small} + 1px)) {
      font-size: ${fontSizes.XXLarge?.md};
    }

    @media only screen and (max-width: ${Breakpoint.Small}) and (min-width: calc(${Breakpoint.XSmall} + 1px)) {
      font-size: ${fontSizes.XXLarge?.sm};
    }

    @media only screen and (max-width: ${Breakpoint.XSmall}) {
      font-size: ${fontSizes.XXLarge?.xs};
    }
  `,

  Mega: `
    ${fontSizes.Mega?.xl};

    @media only screen and (min-width: calc(${Breakpoint.Large} + 1px)) {
      font-size: ${fontSizes.Mega?.xl};
    }

    @media only screen and (max-width: ${Breakpoint.Large}) and (min-width: calc(${Breakpoint.Medium} + 1px)) {
      font-size: ${fontSizes.Mega?.lg};
    }

    @media only screen and (max-width: ${Breakpoint.Medium}) and (min-width: calc(${Breakpoint.Small} + 1px)) {
      font-size: ${fontSizes.Mega?.md};
    }

    @media only screen and (max-width: ${Breakpoint.Small}) and (min-width: calc(${Breakpoint.XSmall} + 1px)) {
      font-size: ${fontSizes.Mega?.sm};
    }

    @media only screen and (max-width: ${Breakpoint.XSmall}) {
      font-size: ${fontSizes.Mega?.xs};
    }
  `,
};
