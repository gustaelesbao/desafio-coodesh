import React from 'react';

import useBreakpoints from 'hooks/use-breakpoints';

interface BreakpointProps extends React.PropsWithChildren {
  hideXs?: boolean;
  hideSm?: boolean;
  hideMd?: boolean;
  hideLg?: boolean;
  hideXl?: boolean;
  hideXxl?: boolean;
}

export const Breakpoint = (props: BreakpointProps) => {
  const { active } = useBreakpoints();

  if (!props.hideXs && active === 'xs') return <>{props.children}</>;
  if (!props.hideSm && active === 'sm') return <>{props.children}</>;
  if (!props.hideMd && active === 'md') return <>{props.children}</>;
  if (!props.hideLg && active === 'lg') return <>{props.children}</>;
  if (!props.hideXl && active === 'xl') return <>{props.children}</>;
  if (!props.hideXxl && active === 'xxl') return <>{props.children}</>;

  return <></>;
};
