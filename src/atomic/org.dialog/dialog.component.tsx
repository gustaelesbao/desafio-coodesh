import * as DialogPrimitive from '@radix-ui/react-dialog';
import React from 'react';
import { Text, Title } from '../atm.typography';
import {
  DialogContentStyled,
  DialogContentWrapperStyled,
  DialogDescriptionStyled,
  DialogOverlayStyled,
  DialogTitleStyled,
} from './dialog.component.style';

export const Dialog = ({ children, ...rest }: DialogPrimitive.DialogProps) => {
  return <DialogPrimitive.Root {...rest}>{children}</DialogPrimitive.Root>;
};

const DialogContent = ({ children, ...props }: DialogPrimitive.DialogContentProps) => {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlayStyled />
      <DialogContentWrapperStyled>
        <DialogContentStyled onOpenAutoFocus={(e) => e.preventDefault()} {...props}>
          {children}
        </DialogContentStyled>
      </DialogContentWrapperStyled>
    </DialogPrimitive.Portal>
  );
};

const DialogTitle = ({ children, ...rest }: DialogPrimitive.DialogTitleProps) => {
  return (
    <DialogTitleStyled {...rest}>
      <Title htmlTag='h2' size='Large'>
        {children}
      </Title>
    </DialogTitleStyled>
  );
};

const DialogDescription = ({ children, ...rest }: DialogPrimitive.DialogDescriptionProps) => {
  return (
    <DialogDescriptionStyled {...rest}>
      <Text>{children}</Text>
    </DialogDescriptionStyled>
  );
};

const DialogTrigger = (props: DialogPrimitive.DialogTriggerProps) => {
  return <DialogPrimitive.Trigger asChild>{props.children}</DialogPrimitive.Trigger>;
};

const DialogClose = (props: DialogPrimitive.DialogCloseProps) => {
  return <DialogPrimitive.Close asChild>{props.children}</DialogPrimitive.Close>;
};

Dialog.Close = DialogClose;
Dialog.Trigger = DialogTrigger;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Content = DialogContent;
