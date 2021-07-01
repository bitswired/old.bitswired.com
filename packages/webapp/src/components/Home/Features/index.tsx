import { Box, Flex } from '@chakra-ui/react';
import { NewsletterContext } from 'context/newsletter';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaChalkboard, FaEnvelope, FaUsers } from 'react-icons/fa';

import FeatureCard from '../FeatureCard';

export default function Features(): JSX.Element | null {
  const newsletterContext = React.useContext(NewsletterContext);
  if (!newsletterContext) return null;
  const { open } = newsletterContext;

  return (
    <Flex direction={['column', 'column', 'row']} justify="space-evenly" p={16}>
      <Fade duration={1000} direction="left" triggerOnce>
        <FeatureCard title="Spreading Knowledge" icon={<FaChalkboard />}>
          As a machine learning engineer, I will share computer science knowledge, and real-life
          work stories. We learn together.
        </FeatureCard>
      </Fade>

      <Fade duration={1000} fraction={0.5} triggerOnce>
        <FeatureCard title="Community Driven" icon={<FaUsers />}>
          We will regularly ask the community to vote for the next topics. You have direct impact on
          the content.
        </FeatureCard>
      </Fade>

      <Fade duration={1000} direction="right" triggerOnce>
        <FeatureCard title="Newsletter" icon={<FaEnvelope />}>
          <>
            We will share new content from Bits Wired and other websites, interesting papers and
            resources.
            <Box as="span" color="primary" cursor="pointer" onClick={open}>
              {' '}
              Subscribe!
            </Box>
          </>
        </FeatureCard>
      </Fade>
    </Flex>
  );
}
