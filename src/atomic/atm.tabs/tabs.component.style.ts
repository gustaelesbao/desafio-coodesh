import * as TabsPrimitive from '@radix-ui/react-tabs';
import { FontFamily, FontSize, FontWeight, LineHeight, Radius, Spacing, StaticColor } from 'app/constants';
import styled from 'styled-components';

export const TabsRootStyled = styled(TabsPrimitive.Root)`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const TabsListStyled = styled(TabsPrimitive.List)`
  display: flex;

  gap: ${Spacing.Size2X};
`;

export const TabsTriggerStyled = styled(TabsPrimitive.Trigger)`
  all: unset;

  gap: ${Spacing.Size2X};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${FontSize.XSmall};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  line-height: ${LineHeight.Medium};
  color: ${StaticColor.Gray800};

  height: ${Spacing.Size10X};

  user-select: none;

  box-sizing: border-box;
  padding: ${Spacing.Size2X} ${Spacing.Size4X};
  background-color: ${StaticColor.Transparent};

  border-radius: ${Radius.Small};

  &:hover {
    background-color: ${StaticColor.Gray200};
  }

  &[data-state='active'] {
    background-color: ${StaticColor.Gray850};
    color: ${StaticColor.White};

    &:hover {
      background-color: ${StaticColor.Gray900};
    }
  }

  &:focus {
    z-index: 2;
    box-shadow: ${(props) => `0 0 0 2px ${props.theme?.colors?.white}, 0 0 0 4px ${props.theme?.colors?.black}`};
  }
`;

export const TabsContentStyled = styled(TabsPrimitive.Content)`
  flex-grow: 1;

  background-color: ${StaticColor.Transparent};

  outline: none;
`;
