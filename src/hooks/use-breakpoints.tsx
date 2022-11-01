import { MediaQueriesOnly } from 'app/constants';

import useMediaQuery from './use-media-query';

export default function useBreakpoints() {
  const breakpoints = {
    isXs: useMediaQuery(MediaQueriesOnly.xs),
    isSm: useMediaQuery(MediaQueriesOnly.sm),
    isMd: useMediaQuery(MediaQueriesOnly.md),
    isLg: useMediaQuery(MediaQueriesOnly.lg),
    isXl: useMediaQuery(MediaQueriesOnly.xl),
    isXxl: useMediaQuery(MediaQueriesOnly.xxl),
    active: 'xs',
  };
  if (breakpoints.isXs) breakpoints.active = 'xs';
  if (breakpoints.isSm) breakpoints.active = 'sm';
  if (breakpoints.isMd) breakpoints.active = 'md';
  if (breakpoints.isLg) breakpoints.active = 'lg';
  if (breakpoints.isXl) breakpoints.active = 'xl';
  if (breakpoints.isXxl) breakpoints.active = 'xxl';
  return breakpoints;
}
