import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Radius, Spacing, StaticColor, Transparence } from 'app/constants';
import styled, { css, keyframes } from 'styled-components';

const OverlayShowAnimation = keyframes`
  0% { opacity: 0 };
  100% { opacity: 1 };
`;

const ContentShowAnimation = keyframes`
  0% { opacity: 0; transform: translate(-50%, -48%) scale(.92) };
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1) };
`;

export const DialogOverlayStyled = styled(DialogPrimitive.Overlay)`
  background-color: ${StaticColor.Gray850}${Transparence[92]};
  position: fixed;
  inset: 0;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${OverlayShowAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  } ;
`;

export const DialogContentWrapperStyled = styled.div`
  background-color: transparent;
  border-radius: ${Radius.Medium};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-height: 90vh;

  padding: ${Spacing.Size0X} ${Spacing.Size6X};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${ContentShowAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:focus {
    outline: none;
  }
`;

export const DialogContentStyled = styled(DialogPrimitive.Content)`
  background-color: ${StaticColor.White};
  border-radius: ${Radius.Medium};

  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 90vh;
  padding: ${Spacing.Size0X};

  &:focus {
    outline: none;
  }
`;

export const DialogTitleStyled = styled(DialogPrimitive.Title)`
  margin-bottom: ${Spacing.Size6X};
`;

export const DialogDescriptionStyled = styled(DialogPrimitive.Description)`
  margin-top: -${Spacing.Size5X};
  margin-bottom: ${Spacing.Size6X};
`;

export const DialogCloseStyled = styled(DialogPrimitive.Close)`
  position: absolute;
  top: ${Spacing.Size3X};
  right: ${Spacing.Size3X};
`;
