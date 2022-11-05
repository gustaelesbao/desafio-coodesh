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

export const WordsListWrapperStyled = styled.div`
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

interface WordStyledProps {
  selected: boolean;
}

export const WordStyled = styled.button<WordStyledProps>`
  width: 100%;
  min-height: ${Spacing.Size10X};

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Nano};
  font-weight: ${FontWeight.Medium};
  color: ${StaticColor.Gray700};
  word-break: break-word;

  background-color: ${StaticColor.White};
  border-radius: ${Radius.Small};
  box-shadow: ${Border.All} ${StaticColor.Gray150};

  padding: ${Spacing.Size1X} ${Spacing.Size2X};

  cursor: pointer;

  transition: background-color ${Transition.Normal};

  &:hover {
    background-color: ${StaticColor.Gray150};
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: ${StaticColor.Gray200};
      color: ${StaticColor.Gray800};

      cursor: default;

      &:hover {
        background-color: ${StaticColor.Gray200};
      }
    `}
`;
