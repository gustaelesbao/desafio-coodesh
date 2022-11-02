import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { Spacing, StaticColor } from 'app/constants';
import styled from 'styled-components';
import { SeparatorRootStyledProps } from './separator.d';

export const SeparatorRootStyled = styled(SeparatorPrimitive.Root)<SeparatorRootStyledProps>`
  background-color: ${(props) => (props.bgColor ? props.bgColor : StaticColor.Gray150)};

  &[data-orientation='horizontal'] {
    height: ${(props) => props.height || Spacing.Size1px};
    width: ${(props) => props.width || '100%'};
  }

  &[data-orientation='vertical'] {
    height: ${(props) => props.height || '100%'};
    width: ${(props) => props.width || Spacing.Size1px};
  }
`;
