import { Property } from 'csstype';

export type WidthTypes = Property.Width;
export type MinWidthTypes = Property.MinWidth;
export type MaxWidthTypes = Property.MaxWidth;

export interface WidthStyleProps {
  width?: WidthTypes;
  widthXxl?: WidthTypes;
  widthXl?: WidthTypes;
  widthLg?: WidthTypes;
  widthMd?: WidthTypes;
  widthSm?: WidthTypes;
  widthXs?: WidthTypes;

  minWidth?: MinWidthTypes;
  minWidthXxl?: MinWidthTypes;
  minWidthXl?: MinWidthTypes;
  minWidthLg?: MinWidthTypes;
  minWidthMd?: MinWidthTypes;
  minWidthSm?: MinWidthTypes;
  minWidthXs?: MinWidthTypes;

  maxWidth?: MaxWidthTypes;
  maxWidthXxl?: MaxWidthTypes;
  maxWidthXl?: MaxWidthTypes;
  maxWidthLg?: MaxWidthTypes;
  maxWidthMd?: MaxWidthTypes;
  maxWidthSm?: MaxWidthTypes;
  maxWidthXs?: MaxWidthTypes;
}
