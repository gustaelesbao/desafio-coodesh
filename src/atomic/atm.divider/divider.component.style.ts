import { Property } from 'csstype';
import styled from 'styled-components';

import { Spacing } from 'app/constants';
import { doubleResponsiveProps } from 'utils/resposive-props';
interface DividerProps {
  size?: Property.Padding;

  sizeXxl?: Property.Padding;
  sizeXl?: Property.Padding;
  sizeLg?: Property.Padding;
  sizeMd?: Property.Padding;
  sizeSm?: Property.Padding;
  sizeXs?: Property.Padding;
}

export const Divider = styled.div<DividerProps>`
  padding-top: ${(props) => (props.size ? props.size : Spacing.Size6X)};
  padding-left: ${(props) => (props.size ? props.size : Spacing.Size6X)};

  ${doubleResponsiveProps('size', 'padding-top', 'padding-left')};
`;
