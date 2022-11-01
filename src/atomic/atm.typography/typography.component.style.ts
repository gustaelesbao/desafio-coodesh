import styled, { css } from 'styled-components';

import { FontFamily, FontSize, FontWeight, LineHeight } from 'app/constants';

import { TitleProps, TextProps } from './typography';
import { DisplayStyle } from 'app/styled-css/display.style/display.style';
import { TextAlignStyle } from 'app/styled-css/text-align/text-align.style';

export const TitleStyled = styled('h3').attrs<TitleProps>(({ htmlTag }) => ({
  as: `${htmlTag ? htmlTag : 'h3'}`,
}))<TitleProps>`
  ${({ size = 'Large', fontWeight = 'Bold', textColor = 'gray900', display = 'block' }) => css`
    font-size: ${FontSize[size]};
    font-family: ${FontFamily.Primary};
    font-weight: ${FontWeight[fontWeight]};

    flex-flow: ;

    color: ${(props) => props.theme.colors[textColor]};

    ${size === 'XNano' && `line-height: ${LineHeight.Large};`}
    ${(size === 'Nano' || size === 'XSmall' || size === 'Small') && `line-height: ${LineHeight.Medium};`}
    ${(size === 'Medium' || size === 'Large') && `line-height: ${LineHeight.Small};`}
    ${(size === 'XLarge' || size === 'XXLarge') && `line-height: ${LineHeight.XSmall};`}
    ${size === 'Mega' && `line-height: ${LineHeight.Nano};`};

    ${DisplayStyle};
    ${TextAlignStyle};
  `}
`;

export const TextStyled = styled('p').attrs<TextProps>(({ htmlTag }) => ({
  as: `${htmlTag ? htmlTag : 'p'}`,
}))<TextProps>`
  ${({ textColor = 'gray700', size = 'Small', fontWeight = 'Regular', htmlTag = 'p' }) => css`
    font-size: ${FontSize[size]};
    font-family: ${FontFamily.Primary};

    color: ${(props) => props.theme.colors[textColor]};

    ${size === 'XNano' && `line-height: ${LineHeight.Large};`}
    ${(size === 'Nano' || size === 'XSmall' || size === 'Small') && `line-height: ${LineHeight.Medium};`}
    ${(size === 'Medium' || size === 'Large') && `line-height: ${LineHeight.Small};`}
    ${(size === 'XLarge' || size === 'XXLarge') && `line-height: ${LineHeight.XSmall};`}
    ${size === 'Mega' && `line-height: ${LineHeight.Nano};`};

    ${DisplayStyle};
    ${TextAlignStyle};

    ${htmlTag === 'b' || htmlTag === 'strong'
      ? css`
          font-weight: ${FontWeight.SemiBold};
        `
      : css`
          font-weight: ${FontWeight[fontWeight]};
        `}
  `}
`;
