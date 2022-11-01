/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

import {
  IconButtonContentStyled,
  IconButtonLoaderStyled,
  IconButtonStyled,
  HeartbeatBackgroundStyled,
  HeartbeatPathStyled,
  HeartbeatSVGStyled,
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

      <IconButtonLoaderStyled
        loading={props.loading}
        kind={props.kind ? props.kind : 'primary'}
        variation={props.variation ? props.variation : 'solid'}
      >
        <HeartbeatSVGStyled width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <HeartbeatPathStyled
            opacity='0.2'
            d='M2 12.381H5.07692L8.92308 4L15.0769 20L18.9231 12.381H22'
            stroke='#323E40'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <HeartbeatBackgroundStyled
            opacity='0.8'
            d='M2 12.381H5.07692L8.92308 4L15.0769 20L18.9231 12.381H22'
            stroke='#323E40'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </HeartbeatSVGStyled>
      </IconButtonLoaderStyled>
    </IconButtonStyled>
  );
});
