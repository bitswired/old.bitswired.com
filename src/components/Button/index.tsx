import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@chakra-ui/button';
import { motion } from 'framer-motion';
import React from 'react';

export interface ButtonProps extends BaseButtonProps {
  children: string;
  variant?:
    | 'primary-solid'
    | 'secondary-solid'
    | 'primary-link'
    | 'secondary-link'
    | 'primary-outline'
    | 'secondary-outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MotionButton = motion(BaseButton);

export default function Button({ children, ...properties }: ButtonProps): JSX.Element {
  return (
    <MotionButton
      // whileTap={{ scale: 0.9, transition: { duration: 0.01 } }}
      {...properties}
      onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
        properties.onClick && properties.onClick(e);
      }}
    >
      {children}
    </MotionButton>
  );
}

// export default withRipples<ButtonProps>(Button, { display: 'inline-block', rounded: 'lg' });
