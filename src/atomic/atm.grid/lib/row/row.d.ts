import { PositionStyleProps, HeightStyleProps, FlexStyleProps } from 'app/styled-css';

import { HiddenProps, ReverseProps } from '../../configs/configs.d';

type HAlignTypes = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';

type VAlignTypes = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';

export interface RowProps extends ReverseProps, HiddenProps, PositionStyleProps, HeightStyleProps, FlexStyleProps {
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
}
