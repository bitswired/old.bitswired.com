import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@chakra-ui/react';
import React from 'react';

export interface ButtonProps extends BaseButtonProps {
  children: string;
  variant?: 'primary-solid' | 'secondary-solid';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, ...properties }: ButtonProps): JSX.Element {
  return (
    <BaseButton
      {...properties}
      boxShadow="none !important"
      onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
        properties.onClick && properties.onClick(e);
      }}>
      {children}
    </BaseButton>
  );
}

// export default withRipples<ButtonProps>(Button, { display: 'inline-block', rounded: 'lg' });
