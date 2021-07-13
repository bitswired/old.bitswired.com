import { Box, Flex } from '@chakra-ui/react';
import NewsletterSubscribeAction from 'components/Actions/NewsletterSubscribeAction';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaChalkboard, FaEnvelope, FaUsers } from 'react-icons/fa';

import FeatureCard from '../FeatureCard';

export default function Features(): JSX.Element | null {
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
            resources.{' '}
            <NewsletterSubscribeAction display="inline">
              <Box as="span" color="primary" textDecor="underline" cursor="pointer">
                Subscribe!
              </Box>
            </NewsletterSubscribeAction>
          </>
        </FeatureCard>
      </Fade>
    </Flex>
  );
}
