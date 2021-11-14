import { Box, Flex } from '@chakra-ui/layout';
import NewsletterSubscribeAction from 'components/Actions/NewsletterSubscribeAction';
import { Fade } from 'components/Reveal/Fade';
import React from 'react';
import { FaChalkboard, FaEnvelope, FaUsers } from 'react-icons/fa';

import FeatureCard from '../FeatureCard';

export default function Features(): JSX.Element | null {
  const frac = 0.25;
  return (
    <Flex direction={['column', 'column', 'row']} justify="space-evenly" p={16}>
      <Fade direction="left" frac={frac} triggerOnce>
        {/* <FeatureCard title="Spreading Knowledge" icon={<FaChalkboard />}> */}
        <FeatureCard title="Spreading Knowledge" icon={<FaChalkboard />}>
          Data, AI, Visualization, Web ... Bitswired mission is to keep learning and educating about
          these pillars of our modern digital era.
        </FeatureCard>
      </Fade>

      <Fade direction="center" frac={frac} triggerOnce>
        <FeatureCard title="Community Driven" icon={<FaUsers />}>
          Building an involved community to learn together! You have direct impact on the content.
        </FeatureCard>
      </Fade>

      <Fade direction="right" frac={frac} triggerOnce>
        <FeatureCard title="Newsletter" icon={<FaEnvelope />}>
          <>
            Sharing new content from Bitswired and other websites, interesting papers and resources.{' '}
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
