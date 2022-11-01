import { PositionStyleProps } from 'app/styled-css/position.style/position';

import { HiddenProps, ReverseProps } from '../../configs/configs.d';

type VAlignTypes = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';

type HAlignTypes = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';

export interface ColProps extends HiddenProps, ReverseProps, PositionStyleProps {
  xxl?: number;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  all?: number;

  offsetXxl?: number;
  offsetXl?: number;
  offsetLg?: number;
  offsetMd?: number;
  offsetSm?: number;
  offsetXs?: number;

  hAlign?: HAlignTypes;
  hAlignXxl?: HAlignTypes;
  hAlignXl?: HAlignTypes;
  hAlignLg?: HAlignTypes;
  hAlignMd?: HAlignTypes;
  hAlignSm?: HAlignTypes;
  hAlignXs?: HAlignTypes;

  vAlign?: VAlignTypes;
  vAlignXxl?: VAlignTypes;
  vAlignXl?: VAlignTypes;
  vAlignLg?: VAlignTypes;
  vAlignMd?: VAlignTypes;
  vAlignSm?: VAlignTypes;
  vAlignXs?: VAlignTypes;

  flex?: boolean;
  noGutter?: boolean;
  gutterTop?: boolean;
  gutterBottom?: boolean;
  gutterTopBottom?: boolean;
}
