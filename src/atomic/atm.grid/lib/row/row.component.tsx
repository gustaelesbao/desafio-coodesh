/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

import { RowStyled } from './row.component.style';
import { RowProps } from './row.d';

export const Row = forwardRef<HTMLDivElement, React.PropsWithChildren<RowProps>>(({ children, ...rest }, ref) => {
  return (
    <RowStyled {...rest} ref={ref}>
      {children}
    </RowStyled>
  );
});
