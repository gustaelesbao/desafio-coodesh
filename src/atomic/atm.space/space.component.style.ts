import styled from 'styled-components';

import { Spacing } from 'app/constants';
import { doubleResponsiveProps } from 'utils/resposive-props';
import { SpaceStyledProps } from './space.d';

export const SpaceStyled = styled.div<SpaceStyledProps>`
  padding-top: ${(props) => (props.size ? props.size : Spacing.Size6X)};
  padding-left: ${(props) => (props.size ? props.size : Spacing.Size6X)};

  ${doubleResponsiveProps('size', 'padding-top', 'padding-left')};
`;
