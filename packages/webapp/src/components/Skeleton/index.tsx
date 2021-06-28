import { Box, keyframes } from '@chakra-ui/react';

export interface SkeletonProps {
  color?: string;
  height: number | string;
  duration?: number;
  isLoaded?: boolean;
  children?: JSX.Element | string | null;
}

const glow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export function Skeleton({
  color = '#DDD',
  height,
  duration = 2,
  isLoaded = false,
  children = null
}: SkeletonProps): JSX.Element {
  const animation = `${glow} infinite ${duration}s linear alternate`;

  if (isLoaded) return <> {children} </>;

  return <Box bgColor={color} height={height} animation={animation} />;
}
