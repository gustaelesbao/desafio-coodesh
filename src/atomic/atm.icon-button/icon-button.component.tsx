/* eslint-disable react/display-name */
import { Spacing } from 'app/constants';
import { Loader } from 'atomic/atm.loader';
import React, { forwardRef } from 'react';

import {
  IconButtonContentStyled,
  IconButtonLoaderWrapperStyled,
  IconButtonStyled,
} from './icon-button.component.style';
import { IconButtonStyledProps } from './icon-button.d';

interface IconButtonProps extends IconButtonStyledProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOut?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  textAlign?: string;
}

export const IconButton = forwardRef<HTMLButtonElement, React.PropsWithChildren<IconButtonProps>>((props, ref) => {
  return (
    <IconButtonStyled
      ref={ref}
      {...props}
      kind={props.kind ? props.kind : 'primary'}
      variation={props.variation ? props.variation : 'solid'}
      disabled={props.loading ? props.loading : props.disabled}
    >
      <IconButtonContentStyled loading={props.loading}>{props.children}</IconButtonContentStyled>

      <IconButtonLoaderWrapperStyled
        loading={props.loading}
        kind={props.kind ? props.kind : 'primary'}
        variation={props.variation ? props.variation : 'solid'}
      >
        <Loader color='inherit' size='100%' weight={Spacing.Size3px} />
      </IconButtonLoaderWrapperStyled>
    </IconButtonStyled>
  );
});
