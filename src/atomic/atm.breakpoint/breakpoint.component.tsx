import React from 'react';

import useBreakpoints from 'hooks/use-breakpoints';

interface BreakpointProps {
  hideXs?: boolean;
  hideSm?: boolean;
  hideMd?: boolean;
  hideLg?: boolean;
  hideXl?: boolean;
  hideXxl?: boolean;
}

export const Breakpoint: React.FC<BreakpointProps> = ({ hideXs, hideSm, hideMd, hideLg, hideXl, hideXxl }, props) => {
  const { active } = useBreakpoints();

  if (!hideXs && active === 'xs') return props.children;
  if (!hideSm && active === 'sm') return props.children;
  if (!hideMd && active === 'md') return props.children;
  if (!hideLg && active === 'lg') return props.children;
  if (!hideXl && active === 'xl') return props.children;
  if (!hideXxl && active === 'xxl') return props.children;

  return <></>;
};
