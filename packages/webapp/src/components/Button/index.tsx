import { Button as BaseButton, chakra } from '@chakra-ui/react';
import useMouse from '@react-hook/mouse-position';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const MotionBox = motion(chakra.span);

export interface ButtonProps {
  children: string;
  variant?: 'primary-solid' | 'secondary-solid';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, ...properties }: ButtonProps): JSX.Element | null {
  const reference = React.useRef<HTMLButtonElement>(null);

  const mouse = useMouse(reference, {
    enterDelay: 50,
    leaveDelay: 50
  });
  const controls = useAnimation();
  if (typeof window === 'undefined') return null;

  return (
    <BaseButton
      {...properties}
      boxShadow="none !important"
      position="relative"
      overflow="hidden"
      ref={reference}
      onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
        let ww = reference.current?.offsetWidth;
        ww ??= 0;

        await controls.start({
          scale: [0, (ww / 10) * 5],
          opacity: [1, 0],
          transition: { duration: 0.5 }
        });
        // Avoid big span over the element at the end
        controls.set({ scale: 0 });

        properties.onClick && properties.onClick(e);
      }}>
      <MotionBox
        position="absolute"
        borderRadius="50%"
        backgroundColor="rgba(255, 255, 255, 0.5)"
        top={`${mouse.y || 0}px`}
        left={`${mouse.x || 0}px`}
        transform="scale(0)"
        width="10px"
        height="10px"
        animate={controls}
      />
      {children}
    </BaseButton>
  );
}
