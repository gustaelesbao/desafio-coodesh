/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

/** Hook personalizado que informa se uma determinada media query está ativa.
 *
 * Inspired by https://usehooks.com/useMedia/
 * https://gist.github.com/gragland/ed8cac563f5df71d78f4a1fefa8c5633
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return matches;
}
