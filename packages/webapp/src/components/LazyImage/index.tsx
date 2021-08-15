import { Image, ImageProps, useBoolean } from '@chakra-ui/react';
import { Skeleton } from 'components/Skeleton';
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export interface LazyImageProps extends ImageProps {
  substitute?: JSX.Element;
  substituteHeight?: number | string;
}

export default function LazyImage({
  substitute,
  substituteHeight,
  ...props
}: LazyImageProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useBoolean();
  const [isVisible, setIsVisible] = useBoolean();

  // FIXME - let the placeholder some time
  // const load = () => delay(() => setIsLoaded.on(), 500);
  const load = () => setIsLoaded.on();

  const placeholder = substitute ?? (
    <Skeleton height={(substituteHeight ?? props.height ?? props.h ?? 'auto') as number | string} />
  );

  return (
    <>
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible: boolean) => isVisible && setIsVisible.on()}>
        <>
          {!isLoaded && placeholder}
          {isVisible && (
            <Image onLoad={load} {...props} visibility={isLoaded ? 'visible' : 'hidden'} />
          )}
        </>
      </VisibilitySensor>
    </>
  );
}
