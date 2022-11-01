import { Property } from 'csstype';

export type TextAlignTypes = Property.TextAlign;

export interface TextAlignStyleProps {
  textAlign?: TextAlignTypes;
  textAlignXs?: TextAlignTypes;
  textAlignSm?: TextAlignTypes;
  textAlignMd?: TextAlignTypes;
  textAlignLg?: TextAlignTypes;
  textAlignXl?: TextAlignTypes;
  textAlignXxl?: TextAlignTypes;
}
