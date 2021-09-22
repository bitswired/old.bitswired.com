import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

type Direction = 'left' | 'right' | 'center';

export interface FadeProps {
  children: JSX.Element;
  direction?: Direction;
  frac: number;
  triggerOnce?: boolean;
}

const MotionBox = motion(Box);

const variants: Record<Direction, any> = {
  left: {
    inView: { opacity: 1, translateX: 0 },
    outView: { opacity: 0, translateX: '-100vw' }
  },
  right: {
    inView: { opacity: 1, translateX: 0 },
    outView: { opacity: 0, translateX: '100vw' }
  },
  center: {
    inView: { opacity: 1, scale: 1 },
    outView: { opacity: 0, scale: 0 }
  }
};

export function Fade({
  children,
  direction = 'center',
  frac = 0,
  triggerOnce = false
}: FadeProps): JSX.Element {
  const { ref, inView } = useInView({
    threshold: frac
  });

  const [reveal, setReveal] = React.useState(false);

  React.useEffect(() => {
    if (triggerOnce) {
      if (inView) setReveal(true);
    } else setReveal(inView);
  }, [inView, triggerOnce]);

  return (
    <Box ref={ref}>
      <MotionBox
        variants={variants[direction]}
        animate={reveal ? 'inView' : 'outView'}
        transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}>
        {children}
      </MotionBox>
    </Box>
  );
}
