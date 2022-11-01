import { FlexItemStyled, FlexStyled } from './flex.component.style';
import { FlexProps } from './flex';

export const Flex = (props: FlexProps) => <FlexStyled {...props}>{props.children}</FlexStyled>;

Flex.Item = FlexItemStyled;
