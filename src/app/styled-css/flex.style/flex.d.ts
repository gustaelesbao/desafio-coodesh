import { Property } from 'csstype';

export type AlignItemsTypes = Property.AlignItems;
export type AlignContentTypes = Property.AlignContent;
export type AlignSelfTypes = Property.AlignSelf;
export type FlexTypes = Property.Flex;
export type FlexDirectionTypes = Property.FlexDirection;
export type FlexWrapTypes = Property.FlexWrap;
export type FlexFlowTypes = Property.FlexFlow;
export type FlexGrowTypes = Property.FlexGrow;
export type FlexShrinkTypes = Property.FlexShrink;
export type FlexBasisTypes = Property.FlexBasis;
export type JustifyContentTypes = Property.JustifyContent;
export type GapTypes = Property.Gap;
export type OrderTypes = Property.Order;

export interface FlexStyleProps {
  alignItems?: AlignItemsTypes;
  alignItemsXxl?: AlignItemsTypes;
  alignItemsXl?: AlignItemsTypes;
  alignItemsLg?: AlignItemsTypes;
  alignItemsMd?: AlignItemsTypes;
  alignItemsSm?: AlignItemsTypes;
  alignItemsXs?: AlignItemsTypes;

  alignContent?: AlignContentTypes;
  alignContentXxl?: alignContentTypes;
  alignContentXl?: alignContentTypes;
  alignContentLg?: alignContentTypes;
  alignContentMd?: alignContentTypes;
  alignContentSm?: alignContentTypes;
  alignContentXs?: alignContentTypes;

  alignSelf?: AlignSelfTypes;
  alignSelfXxl?: alignSelfTypes;
  alignSelfXl?: alignSelfTypes;
  alignSelfLg?: alignSelfTypes;
  alignSelfMd?: alignSelfTypes;
  alignSelfSm?: alignSelfTypes;
  alignSelfXs?: alignSelfTypes;

  flex?: FlexTypes;
  flexXxl?: flexTypes;
  flexXl?: flexTypes;
  flexLg?: flexTypes;
  flexMd?: flexTypes;
  flexSm?: flexTypes;
  flexXs?: flexTypes;

  flexDirection?: FlexDirectionTypes;
  flexDirectionXxl?: flexDirectionTypes;
  flexDirectionXl?: flexDirectionTypes;
  flexDirectionLg?: flexDirectionTypes;
  flexDirectionMd?: flexDirectionTypes;
  flexDirectionSm?: flexDirectionTypes;
  flexDirectionXs?: flexDirectionTypes;

  flexWrap?: FlexWrapTypes;
  flexWrapXxl?: flexWrapTypes;
  flexWrapXl?: flexWrapTypes;
  flexWrapLg?: flexWrapTypes;
  flexWrapMd?: flexWrapTypes;
  flexWrapSm?: flexWrapTypes;
  flexWrapXs?: flexWrapTypes;

  flexFlow?: FlexFlowTypes;
  flexFlowXxl?: FlexFlowTypes;
  flexFlowXl?: FlexFlowTypes;
  flexFlowLg?: FlexFlowTypes;
  flexFlowMd?: FlexFlowTypes;
  flexFlowSm?: FlexFlowTypes;
  flexFlowXs?: FlexFlowTypes;

  flexWra?: flexWrapTypes;
  flexWrapXxl?: flexWrapTypes;
  flexWrapXl?: flexWrapTypes;
  flexWrapLg?: flexWrapTypes;
  flexWrapMd?: flexWrapTypes;
  flexWrapSm?: flexWrapTypes;
  flexWrapXs?: flexWrapTypes;

  flexGrow?: FlexGrowTypes;
  flexGrowXxl?: flexGrowTypes;
  flexGrowXl?: flexGrowTypes;
  flexGrowLg?: flexGrowTypes;
  flexGrowMd?: flexGrowTypes;
  flexGrowSm?: flexGrowTypes;
  flexGrowXs?: flexGrowTypes;

  flexShrink?: FlexShrinkTypes;
  flexShrinkXxl?: flexShrinkTypes;
  flexShrinkXl?: flexShrinkTypes;
  flexShrinkLg?: flexShrinkTypes;
  flexShrinkMd?: flexShrinkTypes;
  flexShrinkSm?: flexShrinkTypes;
  flexShrinkXs?: flexShrinkTypes;

  flexBasis?: FlexBasisTypes;
  flexBasisXxl?: flexBasisTypes;
  flexBasisXl?: flexBasisTypes;
  flexBasisLg?: flexBasisTypes;
  flexBasisMd?: flexBasisTypes;
  flexBasisSm?: flexBasisTypes;
  flexBasisXs?: flexBasisTypes;

  gap?: gapTypes;
  gapXxl?: gapTypes;
  gapXl?: gapTypes;
  gapLg?: gapTypes;
  gapMd?: gapTypes;
  gapSm?: gapTypes;
  gapXs?: gapTypes;

  justifyContent?: JustifyContentTypes;
  justifyContentXxl?: justifyContentTypes;
  justifyContentXl?: justifyContentTypes;
  justifyContentLg?: justifyContentTypes;
  justifyContentMd?: justifyContentTypes;
  justifyContentSm?: justifyContentTypes;
  justifyContentXs?: justifyContentTypes;

  order?: OrderTypes;
  orderXxl?: orderTypes;
  orderXl?: orderTypes;
  orderLg?: orderTypes;
  orderMd?: orderTypes;
  orderSm?: orderTypes;
  orderXs?: orderTypes;
}
