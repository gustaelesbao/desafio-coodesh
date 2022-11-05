import styled, { css } from 'styled-components';

import { FontFamily, FontSize, FontWeight, LineHeight, StaticColor } from 'app/constants';

import { TitleProps, TextProps } from './typography';
import { DisplayStyle, TextAlignStyle, PaddingStyle, MarginStyle } from 'app/styled-css';

export const TitleStyled = styled('h3').attrs<TitleProps>(({ htmlTag }) => ({
  as: `${htmlTag ? htmlTag : 'h3'}`,
}))<TitleProps>`
  ${({ size = 'Large', fontWeight = 'Bold', textColor = StaticColor.Gray900, display = 'block' }) => css`
    font-size: ${FontSize[size]};
    font-family: ${FontFamily.Primary};
    font-weight: ${FontWeight[fontWeight]};

    flex-flow: ;

    color: ${textColor};

    ${size === 'XNano' && `line-height: ${LineHeight.Large};`}
    ${(size === 'Nano' || size === 'XSmall' || size === 'Small') && `line-height: ${LineHeight.Medium};`}
    ${(size === 'Medium' || size === 'Large') && `line-height: ${LineHeight.Small};`}
    ${(size === 'XLarge' || size === 'XXLarge') && `line-height: ${LineHeight.XSmall};`}
    ${size === 'Mega' && `line-height: ${LineHeight.Nano};`};

    ${DisplayStyle};
    ${TextAlignStyle};
    ${PaddingStyle};
    ${MarginStyle};
  `}
`;

export const TextStyled = styled('p').attrs<TextProps>(({ htmlTag }) => ({
  as: `${htmlTag ? htmlTag : 'p'}`,
}))<TextProps>`
  ${({ textColor = StaticColor.Gray700, size = 'Small', fontWeight = 'Regular', htmlTag = 'p' }) => css`
    font-size: ${FontSize[size]};
    font-family: ${FontFamily.Primary};

    color: ${textColor};

    ${size === 'XNano' && `line-height: ${LineHeight.Large};`}
    ${(size === 'Nano' || size === 'XSmall' || size === 'Small') && `line-height: ${LineHeight.Medium};`}
    ${(size === 'Medium' || size === 'Large') && `line-height: ${LineHeight.Small};`}
    ${(size === 'XLarge' || size === 'XXLarge') && `line-height: ${LineHeight.XSmall};`}
    ${size === 'Mega' && `line-height: ${LineHeight.Nano};`};

    ${DisplayStyle};
    ${TextAlignStyle};
    ${PaddingStyle};
    ${MarginStyle};

    ${htmlTag === 'b' || htmlTag === 'strong'
      ? css`
          font-weight: ${FontWeight.SemiBold};
        `
      : css`
          font-weight: ${FontWeight[fontWeight]};
        `}
  `}
`;
