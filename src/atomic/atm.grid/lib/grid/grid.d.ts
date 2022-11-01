import { PositionStyleProps } from 'app/styled-css/position.style/position';
import { HiddenProps, ReverseProps } from '../../configs/configs.d';

export interface GridProps extends ReverseProps, HiddenProps, PositionStyleProps {
  noGutter?: boolean;

  fluid?: boolean;
  fluidXxl?: boolean;
  fluidXl?: boolean;
  fluidLg?: boolean;
  fluidMd?: boolean;
  fluidSm?: boolean;
  fluidXs?: boolean;
}
