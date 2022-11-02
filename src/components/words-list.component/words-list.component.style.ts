import {
  Border,
  FontFamily,
  FontSize,
  FontWeight,
  MediaQueries,
  Radius,
  Spacing,
  StaticColor,
  Transition,
} from 'app/constants';
import styled from 'styled-components';

export const WordsListWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Spacing.Size0_5X};

  width: 100%;

  flex: 1;

  ${`@media ${MediaQueries.md}`} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${`@media ${MediaQueries.xl}`} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const WordStyled = styled.button`
  width: 100%;
  min-height: ${Spacing.Size12X};

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
  color: ${StaticColor.Gray700};

  background-color: ${StaticColor.White};
  border-radius: ${Radius.Small};
  box-shadow: ${Border.All} ${StaticColor.Gray150};

  padding: ${Spacing.Size2X} ${Spacing.Size3X};

  cursor: pointer;

  transition: background-color ${Transition.Normal};

  &:hover {
    background-color: ${StaticColor.Gray150};
  }
`;
