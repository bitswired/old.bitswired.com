import { Image, ImageProps } from '@chakra-ui/image';
// import { Skeleton } from 'components/Skeleton';
import React from 'react';
import { getResponsiveSet } from 'utils/static-urls';

export interface LazyImageProps extends ImageProps {
  substitute?: JSX.Element;
  substituteHeight?: number | string;
  responsive?: boolean;
}

export default function LazyImage({
  substitute,
  substituteHeight,
  responsive = true,
  ...props
}: LazyImageProps): JSX.Element {
  // const [isLoaded, setIsLoaded] = useBoolean();
  // const [isVisible, setIsVisible] = useBoolean();

  // FIXME - let the placeholder some time
  // const load = () => delay(() => setIsLoaded.on(), 500);
  // const load = () => setIsLoaded.on();

  // const placeholder = substitute ?? (
  //   <Skeleton height={(substituteHeight ?? props.height ?? props.h ?? 'auto') as number | string} />
  // );
  const srcSet = responsive && props.src ? getResponsiveSet(props.src) : undefined;

  return (
    <>
      {/* <VisibilitySensor
        partialVisibility
        onChange={(isVisible: boolean) => isVisible && setIsVisible.on()}> */}
      <>
        {/* {!isLoaded && placeholder}
          {isVisible && ( */}
        {/* <Image onLoad={load} {...props} visibility={isLoaded ? 'visible' : 'hidden'} /> */}
        <Image {...props} srcSet={srcSet} />
        {/* <Image {...props} srcSet={srcSet} sizes="100%" /> */}
        {/* )} */}
      </>
      {/* </VisibilitySensor> */}
    </>
  );
}
