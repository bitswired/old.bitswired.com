import useWindowScrollPosition from '@rehooks/window-scroll-position';
import { useRouter } from 'next/router';
import React from 'react';

interface HeaderVisible {
  isGoingDown: boolean;
  lock: boolean;
}

export default function useHeaderVisible(): HeaderVisible {
  const position = useWindowScrollPosition({ throttle: 100 });
  const [lastPosition, setLastPosition] = React.useState(position);
  const [isGoingDown, setIsGoingDown] = React.useState(false);
  const isScrolled = position.y > 0;
  const { pathname } = useRouter();

  React.useEffect(() => {
    if (position.y > 100) {
      if (position.y > lastPosition.y) setIsGoingDown(true);
      else setIsGoingDown(false);
    }

    setLastPosition(position);
  }, [position]);

  const re = /^\/blog.*/;
  const lock = re.test(pathname) || isScrolled;

  return { isGoingDown, lock };
}
