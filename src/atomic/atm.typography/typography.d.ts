import { DefaultTheme } from 'styled-components';

import { FontSizes, FontWeight } from 'app/constants';
import { DisplayStyleProps, TextAlignStyleProps, MarginStyleProps, PaddingStyleProps } from 'app/styled-css';
import React from 'react';
export interface TitleProps
  extends DisplayStyleProps,
    MarginStyleProps,
    PaddingStyleProps,
    TextAlignStyleProps,
    React.PropsWithChildren {
  textColor?: string;
  size?: keyof typeof FontSizes;

  /** Peso da fonte:
   * Regular - 400 na escala de font-weight
   * Medium - 500 na escala de font-weight
   * SemiBold - 600 na escala de font-weight
   * Bold - 700 na escala de font-weight
   */
  fontWeight?: keyof typeof FontWeight;

  /** Tipos de tag html:
   * <h1> a <h6> - Títulos da página, sendo <h1> o mais importante (e único da página) e <h6> o menos importante
   */
  htmlTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface TextProps
  extends DisplayStyleProps,
    TextAlignStyleProps,
    MarginStyleProps,
    PaddingStyleProps,
    React.PropsWithChildren {
  textColor?: string;
  size?: keyof typeof FontSizes;

  /** Peso da fonte:
   * Regular - 400 na escala de font-weight
   * Medium - 500 na escala de font-weight
   * SemiBold - 600 na escala de font-weight
   * Bold - 700 na escala de font-weight
   */
  fontWeight?: keyof typeof FontWeight;

  /** Tipos de tag html:
   * <p> - Parágrafo padrão
   * <b> - Texto em bold
   * <strong> - Texto importante
   * <i> - Texto em itálico
   * <em> - Texto em ênfase
   * <mark> - Marcações de texto
   * <small> - Textos pequeno
   * <del> - Texto deletado
   * <ins> - Texto sublinhado
   * <sub> - Texto subscrito
   * <sup> - Texto sobrescrito
   */
  htmlTag?: 'p' | 'span' | 'b' | 'strong' | 'em' | 'mark' | 'small' | 'del' | 'ins' | 'sub' | 'sup';
}
