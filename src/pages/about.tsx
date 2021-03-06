/* eslint-disable react/no-unescaped-entities */
import { Icon } from '@chakra-ui/icon';
import {
  Box,
  Heading,
  HStack,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Wrap
} from '@chakra-ui/layout';
import Button from 'components/Button';
import { infos } from 'config';
import { NextSeo } from 'next-seo';
import React from 'react';
import {
  FaAtom,
  FaBrain,
  FaCode,
  FaEnvelope,
  FaEnvelopeOpenText,
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
  if (primary) color = 'primary1';
  else if (secondary) color = 'secondary1';

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
  const headingColor = variant === 'light' ? 'secondary1' : 'primary1';

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
  color: 'primary1' | 'secondary1';
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
              I am a 28 years old machine learning engineer based in Switzerland. I studied at EPFL
              where I first got a Bachelor's degree in Computer Science/Communication Systems, and
              then a Master's degree in Data Science.
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
            <Link alt="Email address" href={`mailto:${infos.contactEmail}`}>
              <Button size="md" variant="primary-solid" leftIcon={<FaEnvelope />}>
                Contact me by email
              </Button>
            </Link>

            <Link alt href={infos.linkedInProfile}>
              <Button size="md" variant="secondary-solid" leftIcon={<FaLinkedin />}>
                Find me on Linkedin
              </Button>
            </Link>
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
                title="A bit of Research"
                description="Highlighted research paper, with comments and executive summary."
                color="secondary1"
              />
              <NewsletterFeature
                icon={FaAtom}
                title="A bit of Tech"
                description="Articles to stay on top of our modern data era."
                color="secondary1"
              />
              <NewsletterFeature
                icon={FaCode}
                title="A bit of Tools"
                description="Highlighted libraries, framework or tool introduced in the blink of an eye."
                color="secondary1"
              />
              <NewsletterFeature
                icon={FaEnvelopeOpenText}
                title="A bit of News"
                description="News covering important events around the digital technologies world."
                color="secondary1"
              />
            </Wrap>
          </VStack>
        </Section>

        {/* <Section id="discord" title="Discord Community  " variant="dark" icon={FaDiscord}>
          <Text>
            The{' '}
            <Link href={infos.discrodInvite} isExternal textDecor="underline" color="primary1">
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
        </Section> */}
      </VStack>
    </>
  );
}
