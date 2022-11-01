import { Property } from 'csstype';

export type PositionTypes = Property.Position;

export interface PositionStyleProps {
  position?: PositionTypes;
  positionXs?: PositionTypes;
  positionSm?: PositionTypes;
  positionMd?: PositionTypes;
  positionLg?: PositionTypes;
  positionXl?: PositionTypes;
  positionXxl?: PositionTypes;
}
