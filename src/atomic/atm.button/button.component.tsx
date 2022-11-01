/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

import { ButtonStyledProps } from './button';
import { ButtonContentStyled, ButtonLoaderStyled, ButtonStyled } from './button.component.style';

interface ButtonProps extends ButtonStyledProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  textAlign?: string;
}

export const Button = forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>((props, ref) => {
  return (
    <ButtonStyled
      ref={ref}
      {...props}
      kind={props.kind ? props.kind : 'primary'}
      variation={props.variation ? props.variation : 'solid'}
      disabled={props.loading ? props.loading : props.disabled}
    >
      <ButtonContentStyled loading={props.loading}>{props.children}</ButtonContentStyled>

      <ButtonLoaderStyled
        loading={props.loading}
        kind={props.kind ? props.kind : 'primary'}
        variation={props.variation ? props.variation : 'solid'}
      >
        Carregando
      </ButtonLoaderStyled>
    </ButtonStyled>
  );
});
