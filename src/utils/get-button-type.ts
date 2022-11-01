import { StaticColor } from 'app/constants';
import { ButtonColorProps, ButtonKind } from 'atomic/atm.button/button.d';

export const getButtonType = (kind: string | undefined): ButtonColorProps => {
  switch (kind) {
    case ButtonKind.primary:
      return {
        solid: {
          textColor: StaticColor.White,
          shapeColor: StaticColor.Primary600,

          hoverTextColor: StaticColor.White,
          hoverShapeColor: StaticColor.Primary700,

          borderColor: StaticColor.Transparent,
        },
        light: {
          textColor: StaticColor.Primary800,
          shapeColor: StaticColor.Primary100,

          hoverTextColor: StaticColor.Primary800,
          hoverShapeColor: StaticColor.Primary200,

          borderColor: StaticColor.Transparent,
        },
      };

    case ButtonKind.secondary:
      return {
        solid: {
          textColor: StaticColor.Gray800,
          shapeColor: StaticColor.Gray150,

          hoverTextColor: StaticColor.Gray800,
          hoverShapeColor: StaticColor.Gray200,

          borderColor: StaticColor.Transparent,
        },
      };

    case ButtonKind.tertiary:
      return {
        solid: {
          textColor: StaticColor.Gray800,
          shapeColor: StaticColor.White,

          hoverTextColor: StaticColor.Gray800,
          hoverShapeColor: StaticColor.Gray200,

          borderColor: StaticColor.Gray200,
        },
        light: {
          textColor: StaticColor.Gray600,
          shapeColor: StaticColor.Transparent,

          hoverTextColor: StaticColor.Gray800,
          hoverShapeColor: StaticColor.Gray200,

          borderColor: StaticColor.Gray200,
        },
      };

    case ButtonKind.danger:
      return {
        solid: {
          textColor: StaticColor.Red800,
          shapeColor: StaticColor.Red100,

          hoverTextColor: StaticColor.Red800,
          hoverShapeColor: StaticColor.Red200,

          borderColor: StaticColor.Transparent,
        },
      };

    default:
      return {
        solid: {
          textColor: StaticColor.White,
          shapeColor: StaticColor.Primary600,

          hoverTextColor: StaticColor.White,
          hoverShapeColor: StaticColor.Primary700,

          borderColor: StaticColor.Transparent,
        },
        light: {
          textColor: StaticColor.Primary800,
          shapeColor: StaticColor.Primary100,

          hoverTextColor: StaticColor.Primary800,
          hoverShapeColor: StaticColor.Primary200,

          borderColor: StaticColor.Transparent,
        },
      };
  }
};
