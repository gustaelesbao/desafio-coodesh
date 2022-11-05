import { PositionStyleProps, HeightStyleProps } from 'app/styled-css';
import { HiddenProps, ReverseProps } from '../../configs/configs.d';

export interface GridProps extends ReverseProps, HiddenProps, PositionStyleProps, HeightStyleProps {
  noGutter?: boolean;

  fluid?: boolean;
  fluidXxl?: boolean;
  fluidXl?: boolean;
  fluidLg?: boolean;
  fluidMd?: boolean;
  fluidSm?: boolean;
  fluidXs?: boolean;
}
