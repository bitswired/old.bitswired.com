import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export interface FadeProps {
  children: JSX.Element;
}

const MotionBox = motion(Box);

export function AttentionSeeker({ children }: FadeProps): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0
  });

  // const fade = {
  //   inView: { opacity: 1 },
  //   outView: { opacity: 0 }
  // };

  const fromLeft = {
    inView: { opacity: 1, rotate: [-10, 10, 0], translateY: [-10, 0] },
    outView: { opacity: 1 }
  };

  // const fromRight = {
  //   inView: { opacity: 1, translateX: 0 },
  //   outView: { opacity: 0, translateX: '100vw' }
  // };

  return (
    <Box ref={ref}>
      <MotionBox
        variants={fromLeft}
        animate={inView ? 'inView' : 'outView'}
        // transition={{ duration: 0.5 }}
        transition={{ type: 'spring', bounce: 0.3, duration: 0.2, delay: 0.2 }}
      >
        {children}
      </MotionBox>
    </Box>
  );
}
