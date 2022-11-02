import { SeparatorRootStyledProps } from './separator.d';
import { SeparatorRootStyled } from './separator.component.style';

export const Separator = (props: SeparatorRootStyledProps) => (
  <SeparatorRootStyled decorative={props.decorative || true} {...props} />
);
