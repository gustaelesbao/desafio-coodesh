import { Property } from 'csstype';

export type HeightTypes = Property.Height;
export type MinHeightTypes = Property.MinHeight;
export type MaxHeightTypes = Property.MaxHeight;

export interface HeightStyleProps {
  height?: HeightTypes;
  heightXxl?: heightTypes;
  heightXl?: heightTypes;
  heightLg?: heightTypes;
  heightMd?: heightTypes;
  heightSm?: heightTypes;
  heightXs?: heightTypes;

  minHeight?: MinHeightTypes;
  minHeightXxl?: minHeightTypes;
  minHeightXl?: minHeightTypes;
  minHeightLg?: minHeightTypes;
  minHeightMd?: minHeightTypes;
  minHeightSm?: minHeightTypes;
  minHeightXs?: minHeightTypes;

  maxHeight?: MaxHeightTypes;
  maxHeightXxl?: maxHeightTypes;
  maxHeightXl?: maxHeightTypes;
  maxHeightLg?: maxHeightTypes;
  maxHeightMd?: maxHeightTypes;
  maxHeightSm?: maxHeightTypes;
  maxHeightXs?: maxHeightTypes;
}
