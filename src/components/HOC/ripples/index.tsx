import { Box } from '@chakra-ui/layout';
import { keyframes } from '@chakra-ui/system';
import React from 'react';
import { ComponentType } from 'react';

function addRipple(e: React.MouseEvent<HTMLDivElement>) {
  const bounds = (e.target as HTMLElement).getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;
  const w = e.currentTarget.clientWidth;
  const h = e.currentTarget.clientHeight;
  const diameter = Math.max(w, h);

  const circle = document.createElement('span');
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${x - diameter / 2}px`;
  circle.style.top = `${y - diameter / 2}px`;
  circle.classList.add('ripple');

  circle.onanimationend = () => {
    circle.remove();
  };
  e.currentTarget.append(circle);
}

interface Config {
  display: 'inline-block' | 'block';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function withRipples<T>(
  Component: ComponentType<T>,
  config: Config
): ComponentType<T> {
  const Comp = (props: T): JSX.Element => {
    const ripple = keyframes`
      to { opacity: 0; transform: scale(5) }
    `;

    const animation = `${ripple} 0.6s linear running forwards`;

    return (
      <Box
        as="div"
        display={config.display}
        rounded={config.rounded}
        // w="max"
        // h="max"
        position="relative"
        overflow="hidden"
        onClick={addRipple}
        sx={{
          '.ripple': {
            position: 'absolute',
            opacity: 1,
            zIndex: 100,
            borderRadius: '50%',
            transform: 'scale(0)',
            animation: animation,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            pointerEvents: 'none'
          }
        }}>
        <Component {...props} />
      </Box>
    );
  };

  Comp.displayName = `Ripples${Component.displayName}`;

  return Comp;
}
