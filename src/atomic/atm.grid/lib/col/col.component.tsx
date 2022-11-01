/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

import { ColStyled } from './col.component.style';
import { ColProps } from './col.d';

export const Col = forwardRef<HTMLDivElement, React.PropsWithChildren<ColProps>>(({ children, ...rest }, ref) => {
  return (
    <ColStyled {...rest} ref={ref}>
      {children}
    </ColStyled>
  );
});
