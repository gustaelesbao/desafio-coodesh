/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

import { GridStyled } from './grid.component.style';
import { GridProps } from './grid.d';

export const Grid = forwardRef<HTMLDivElement, React.PropsWithChildren<GridProps>>(({ children, ...rest }, ref) => {
  return (
    <GridStyled {...rest} ref={ref}>
      {children}
    </GridStyled>
  );
});
