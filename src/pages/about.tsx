/* eslint-disable react/no-unescaped-entities */
import { Icon } from '@chakra-ui/icon';
import {
  Box,
  Heading,
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Wrap
} from '@chakra-ui/layout';
import { infos } from 'config';
import { NextSeo } from 'next-seo';
import React from 'react';
import {
  FaAtom,
  FaBrain,
  FaCode,
  FaDiscord,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaExternalLinkAlt,
  FaGlobe,
  FaLinkedin,
  FaUser
} from 'react-icons/fa';

interface AccentProps {
  children: string;
  bold?: boolean;
  primary?: boolean;
  secondary?: boolean;
}
function Accent({ children, primary = false, secondary = false, bold = false }: AccentProps) {
  let color;
  if (primary) color = 'primary';
  else if (secondary) color = 'secondary';

  const fontWeight = bold ? 'bold' : 'normal';

  return (
    <Box as="span" color={color} fontWeight={fontWeight}>
      {children}
    </Box>
  );
}

interface SectionProps {
  id: string;
  title: string;
  icon: any;
  variant: 'light' | 'dark';
  children: JSX.Element | JSX.Element[];
}

function Section({ id, title, variant, icon, children }: SectionProps) {
  const bgColor = variant === 'light' ? 'white' : 'black';
  const color = variant === 'light' ? '#333' : 'white';
  const headingColor = variant === 'light' ? 'secondary' : 'primary';

  return (
    <Box as="section" id={id} bgColor={bgColor} color={color} p="2em">
      <VStack pt="50px" maxW="70ch" align="left" m="auto" spacing="2em">
        <HStack align="center" color={headingColor} spacing="1em">
          <Icon as={icon} fontSize="7xl" />
          <Heading as="h2">{title}</Heading>
        </HStack>

        {children}
      </VStack>
    </Box>
  );
}

interface NewsletterFeatureProps {
  icon: any;
  title: string;
  description: string;
  color: 'primary' | 'secondary';
}

function NewsletterFeature({ icon, title, description, color }: NewsletterFeatureProps) {
  return (
    <VStack w={['100%', '48%']} p="1em">
      <HStack spacing="1em">
        <Icon as={icon} fontSize="4xl" color={color} />
        <Text w="15ch" fontWeight="bold" color={color} fontSize="xl">
          {title}
        </Text>
      </HStack>
      <Text textAlign={['center', 'left']} fontSize="sm" w={['35ch', '100%']}>
        {description}
      </Text>
    </VStack>
  );
}

export default function AboutPage(): JSX.Element {
  const url = 'https://www.bitswired.com/about';
  const title = 'About Bitswired - More than a blog, a Newsletter and a Community';
  const description =
    'Bitswired is a website where I share AI, coding, and tech-related content. Subscribe to the newsletter and join the Discord community.';

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          site_name: 'Bitswired'
        }}
        twitter={{
          handle: '@Bitswired',
          site: '@Bitswired'
        }}
      />

      <VStack align="stretch">
        <Section id="me" title="Me" variant="light" icon={FaUser}>
          <Box>
            <Text>
              I am a French, 28 years old machine learning engineer based in Switzerland. I studied
              at EPFL where I first got a Bachelor's degree in Computer Science/Communication
              Systems, and then a Master's degree in Data Science.
            </Text>
            <br />
            <Text>
              I currently work at Visium, an AI startup where we build state-of-the-art artificial
              intelligence solutions to empower the digital transformation of businesses.
            </Text>
            <br />
            <Text>
              My main interests are in artificial intelligence, computer graphics, and web
              development (back-end and front-end).
            </Text>
          </Box>

          <VStack align={['center', 'stretch']}>
            <LinkBox>
              <HStack color="primary" w="22ch">
                <Icon as={FaEnvelope} fontSize="2xl" />
                <LinkOverlay textDecoration="underline" href={`mailto:${infos.contactEmail}`}>
                  Contact me by email
                </LinkOverlay>
              </HStack>
            </LinkBox>

            <LinkBox>
              <HStack color="secondary" w="22ch">
                <Icon as={FaLinkedin} fontSize="2xl" />
                <LinkOverlay textDecoration="underline" isExternal href={infos.linkedInProfile}>
                  Find me on LinkedIn
                </LinkOverlay>
              </HStack>
            </LinkBox>
          </VStack>
        </Section>

        <Section id="bitswired" title="Bitswired" variant="dark" icon={FaGlobe}>
          <Text>
            I'm creating Bitswired to share my enthusiasm for digital technologies and related
            sciences. From programming to artificial intelligence and more!
          </Text>

          <Text>Let's build a community to learn and discover together!</Text>

          <Text>What can you expect?</Text>

          <UnorderedList pl="1em">
            <ListItem>
              <Accent primary bold>
                Regular articles
              </Accent>{' '}
              about AI, programming, tutorials, in-depth guides ...
            </ListItem>
            <ListItem>
              <Accent primary bold>
                Community-driven
              </Accent>{' '}
              content to get you involved in the process.
            </ListItem>
            <ListItem>
              A{' '}
              <Accent primary bold>
                Discord community
              </Accent>{' '}
              and{' '}
              <Accent primary bold>
                Newsletter
              </Accent>{' '}
              for tech enthusiasts.
            </ListItem>
          </UnorderedList>

          <br />
        </Section>

        <Section id="newsletter" title="Newsletter" variant="light" icon={FaEnvelope}>
          <Text>
            The Bitswired newsletter is a means to interact directly with you.{' '}
            <Accent secondary bold>
              Learning never ends!
            </Accent>
          </Text>
          <Text>
            I'm constantly looking for cutting-edge technologies, trying new tools, and reading
            papers. I will share my findings with you regularly via a{' '}
            <Accent secondary bold>
              curated digest
            </Accent>{' '}
            of valuable information. It is published{' '}
            <Accent secondary bold>
              every two weeks
            </Accent>
            .
          </Text>

          <Text>
            It won't be a no-reply email, so I invite you to answer to spark interesting
            conversations.
          </Text>

          <VStack rounded="lg" bgColor="gray.200" p="1em" spacing="1em">
            <Heading>Features</Heading>
            <Wrap m="auto" justify="center">
              <NewsletterFeature
                icon={FaBrain}
                title="Bits of Research"
                description="1 highlighted research paper, with comments and executive summary."
                color="secondary"
              />
              <NewsletterFeature
                icon={FaAtom}
                title="Bits of Tech"
                description="2 selected articles to stay on top of our modern data era."
                color="secondary"
              />
              <NewsletterFeature
                icon={FaCode}
                title="Bits of Code"
                description="1 highlighted library, framework or tool introduced in the blink of an eye."
                color="secondary"
              />
              <NewsletterFeature
                icon={FaEnvelopeOpenText}
                title="Bits of News"
                description="Several news covering important events around the digital technologies world."
                color="secondary"
              />
            </Wrap>
          </VStack>
        </Section>

        <Section id="discord" title="Discord Community  " variant="dark" icon={FaDiscord}>
          <Text>
            The{' '}
            <Link href={infos.discrodInvite} isExternal textDecor="underline" color="primary">
              Bitswired discord community <Icon as={FaExternalLinkAlt} fontSize="0.7em" />
            </Link>{' '}
            is a place for us to connect, learn together and share our passion for digital
            technologies!
          </Text>

          <UnorderedList pl="1em">
            <ListItem>
              {' '}
              If you are learning programming, data science, AI, ... come ask questions
            </ListItem>
            <ListItem> Participate to weekly challenges for fun, unlock roles</ListItem>
          </UnorderedList>
          <br />
          <br />
          <br />
        </Section>
      </VStack>
    </>
  );
}
