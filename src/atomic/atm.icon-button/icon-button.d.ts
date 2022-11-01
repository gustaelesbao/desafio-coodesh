import { Radius } from 'atomic/constants';

import { ButtonKind } from '../atm.button/button';

export interface IconButtonStyledProps {
  expanded?: boolean;
  kind?: keyof typeof ButtonKind;
  size?: 'XNano' | 'Nano' | 'Small' | 'Medium' | 'Large';
  variation?: 'solid' | 'light';
  border?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
  borderRadius?: keyof typeof Radius;
}
