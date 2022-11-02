import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import React from 'react';
import { Text, Title } from '../atm.typography';
import {
  AlertDialogContentStyled,
  AlertDialogContentWrapperStyled,
  AlertDialogDescriptionStyled,
  AlertDialogOverlayStyled,
  AlertDialogTitleStyled,
} from './alert-dialog.component.style';

export interface AlertDialogContentProps extends AlertDialogPrimitive.AlertDialogProps {
  maxWidth?: number;
  maxWidthXxl?: number;
  maxWidthXl?: number;
  maxWidthLg?: number;
  maxWidthMd?: number;
  maxWidthSm?: number;
  maxWidthXs?: number;
}

export const AlertDialog = ({ children, ...rest }: AlertDialogPrimitive.AlertDialogProps) => {
  return <AlertDialogPrimitive.Root {...rest}>{children}</AlertDialogPrimitive.Root>;
};

const AlertDialogContent = ({ children, ...props }: AlertDialogContentProps) => {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogOverlayStyled />
      <AlertDialogContentWrapperStyled
        maxWidth={props.maxWidth || 6}
        maxWidthXxl={props.maxWidthXxl || 6}
        maxWidthXl={props.maxWidthXl || 8}
        maxWidthLg={props.maxWidthLg || 8}
        maxWidthMd={props.maxWidthMd || 10}
        maxWidthSm={props.maxWidthSm || 12}
        maxWidthXs={props.maxWidthXs || 12}
      >
        <AlertDialogContentStyled onOpenAutoFocus={(e) => e.preventDefault()} {...props}>
          {children}
        </AlertDialogContentStyled>
      </AlertDialogContentWrapperStyled>
    </AlertDialogPrimitive.Portal>
  );
};

const AlertDialogTitle = ({ children, ...rest }: AlertDialogPrimitive.AlertDialogTitleProps) => {
  return (
    <AlertDialogTitleStyled {...rest}>
      <Title htmlTag='h2' size='Large'>
        {children}
      </Title>
    </AlertDialogTitleStyled>
  );
};

const AlertDialogDescription = ({ children, ...rest }: AlertDialogPrimitive.AlertDialogDescriptionProps) => {
  return (
    <AlertDialogDescriptionStyled {...rest}>
      <Text>{children}</Text>
    </AlertDialogDescriptionStyled>
  );
};

const AlertDialogTrigger = (props: AlertDialogPrimitive.AlertDialogTriggerProps) => {
  return <AlertDialogPrimitive.Trigger asChild>{props.children}</AlertDialogPrimitive.Trigger>;
};

const AlertDialogCancel = (props: AlertDialogPrimitive.AlertDialogCancelProps) => {
  return <AlertDialogPrimitive.Cancel asChild>{props.children}</AlertDialogPrimitive.Cancel>;
};

const AlertDialogAction = (props: AlertDialogPrimitive.AlertDialogActionProps) => {
  return <AlertDialogPrimitive.Action asChild>{props.children}</AlertDialogPrimitive.Action>;
};

AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;
AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Content = AlertDialogContent;
