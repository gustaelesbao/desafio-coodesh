import { Border, Radius, Spacing, StaticColor } from 'app/constants';
import styled from 'styled-components';

export const WordBoxWrapperStyled = styled.div`
  width: 100%;
  height: ${Spacing.Size52X};

  background-color: ${StaticColor.Primary100};
  border-radius: ${Radius.Medium};
  box-shadow: ${Border.All} ${StaticColor.Primary300};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${Spacing.Size5X};
`;
