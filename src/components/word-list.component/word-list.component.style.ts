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
import styled, { css } from 'styled-components';

export const WordListScrollAreaStyled = styled.div`
  overflow: auto;

  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  padding-right: ${Spacing.Size1X};
`;

export const WordListWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${Spacing.Size0_5X};

  width: 100%;

  flex: 1;

  ${`@media ${MediaQueries.sm}`} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${`@media ${MediaQueries.lg}`} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${`@media ${MediaQueries.xl}`} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
