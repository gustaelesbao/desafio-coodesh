import { Border, FontFamily, FontSize, FontWeight, Radius, Spacing, StaticColor, Transition } from "app/constants";
import styled, { css } from "styled-components";

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
