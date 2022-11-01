import { Radius } from 'atomic/constants';

export enum ButtonKind {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  danger = 'danger',
}

export interface ButtonStyledProps {
  expanded?: boolean;
  kind?: keyof typeof ButtonKind;
  size?: 'XNano' | 'Nano' | 'Small' | 'Medium' | 'Large';
  variation?: 'solid' | 'light';
  border?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
  noPadding?: boolean;
  borderRadius?: keyof typeof Radius;
}

interface ButtonVariantProps {
  textColor: string;
  shapeColor: string;
  borderColor?: string;

  hoverShapeColor: string;
  hoverTextColor: string;
}

export interface ButtonColorProps {
  solid: ButtonVariantProps;
  light?: ButtonVariantProps;
}
