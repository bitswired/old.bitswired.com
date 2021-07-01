import { Box } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import { IMAGE_HOME, IMAGE_HOME_MOBILE } from 'utils/static-urls';

import Headline from '../Headline';
import Subline from '../Subline';

export interface LandingProps {
  size: 'sm' | 'md' | 'lg';
}

export default function Landing({ size }: LandingProps): JSX.Element {
  return (
    <Box
      id="zdar"
      height="100vh"
      bgImage={
        size === 'sm'
          ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${IMAGE_HOME_MOBILE}')`
          : `url('${IMAGE_HOME}')`
      }
      bgPosition="center -100px"
      bgColor="#1F2C32"
      bgRepeat="repeat-y"
      backgroundSize="cover"
      px={16}
      pt={28}>
      <Fade cascade duration={500} triggerOnce>
        <Box py={8}>
          <Headline size={size} />
        </Box>
        <Box py={8}>
          <Subline size={size} />
        </Box>
      </Fade>
    </Box>
  );
}
