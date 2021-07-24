import { Box, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import React from 'react';
import {
  FaBlog,
  FaBrain,
  FaCode,
  FaDiscord,
  FaEnvelope,
  FaGlobe,
  FaHistory,
  FaLinkedin,
  FaNewspaper,
  FaUniversity,
  FaUser,
  FaUsers
} from 'react-icons/fa';

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
    <Box id={id} bgColor={bgColor} color={color} p="2em">
      <VStack maxW="70ch" align="left" m="auto" spacing="2em">
        <HStack align="center" color={headingColor}>
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

function NewsletterFeature({ icon, title, color }: NewsletterFeatureProps) {
  return (
    <HStack spacing="1em">
      <Icon as={icon} fontSize="4xl" color={color} />
      <Text w="20ch" fontWeight="bold" color={color} fontSize="xl">
        {title}
      </Text>
      {/* <Text fontSize="sm">{description}</Text> */}
    </HStack>
  );
}

export default function AboutPage(): JSX.Element {
  const url = 'https://www.bitswired.com';
  const title = 'Home';
  const description =
    'Bitswired website. Artificial intelligence, computer graphics, web development and more';

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

      {/* <Center>
        <Heading as="h1" mt="1em">
          About
        </Heading>
      </Center>

      <Divider my="1em" /> */}

      <VStack align="stretch">
        <Section id="me" title="Me" variant="light" icon={FaUser}>
          <Box>
            <Text>
              I am a French, 28 years old machine learning engineer based in Switzerland. I studied
              at EPFL where I first got a Bachelor degree in Computer Science/Communcation Systems,
              and then a Master degree in Data Science.
            </Text>
            <br />
            {/* <Text>
                My main subject of interest are Artificial Intelligence, Computer Graphics and Web
                Development. My goal with this website is to share with you this passion, help you
                getting starting in these fields.
              </Text> */}
            <br />
            <Text>I did one intership at a research</Text>
          </Box>

          <VStack align="left">
            <HStack>
              <Icon as={FaEnvelope} />
              <Text>jimi.vaubien@bitswired.com</Text>
            </HStack>

            <HStack>
              <Icon as={FaLinkedin} />
              <Text>jimi.vaubien@bitswired.com</Text>
            </HStack>

            <HStack>
              <Icon as={FaUsers} />
              <Text>jimi.vaubien@bitswired.com</Text>
            </HStack>

            <HStack>
              <Icon as={FaUniversity} />
              <Text>jimi.vaubien@bitswired.com</Text>
            </HStack>
          </VStack>
        </Section>

        <Section id="bitswired" title="Bitswired" variant="dark" icon={FaGlobe}>
          <Text>
            I am a French, 28 years old machine learning engineer based in Switzerland. I studied at
            EPFL where I first got a Bachelor degree in Computer Science/Communcation Systems, and
            then a Master degree in Data Science.
          </Text>
          <br />
          <Text>
            My main subject of interest are Artificial Intelligence, Computer Graphics and Web
            Development. My goal with this website is to share with you this passion, help you
            getting starting in these fields.
          </Text>
        </Section>

        <Section id="newsletter" title="Newsletter" variant="light" icon={FaEnvelope}>
          <Text>
            The Bitswired newsletter is a mean to interact directly with you, sharing a curated
            digest of high-valued, useful information. It will follow a main weekly schedule.
          </Text>

          <VStack>
            <NewsletterFeature
              icon={FaBrain}
              title="Paper of the Week"
              description="Bla vla val"
              color="primary"
            />
            <NewsletterFeature
              icon={FaBlog}
              title="Articles of the Week"
              description="Bla vla val"
              color="secondary"
            />
            <NewsletterFeature
              icon={FaCode}
              title="Tools of the Week"
              description="Bla vla val"
              color="primary"
            />
            <NewsletterFeature
              icon={FaNewspaper}
              title="News of the Week"
              description="Bla vla val"
              color="secondary"
            />
            <NewsletterFeature
              icon={FaHistory}
              title="Bitswired Week"
              description="Bla vla val"
              color="primary"
            />
          </VStack>
        </Section>

        <Section id="discord" title="Discord Community  " variant="dark" icon={FaDiscord}>
          <Text>
            I am a French, 28 years old machine learning engineer based in Switzerland. I studied at
            EPFL where I first got a Bachelor degree in Computer Science/Communcation Systems, and
            then a Master degree in Data Science.
          </Text>
          <br />
          <Text>
            My main subject of interest are Artificial Intelligence, Computer Graphics and Web
            Development. My goal with this website is to share with you this passion, help you
            getting starting in these fields.
          </Text>
        </Section>
      </VStack>
    </>
  );
}
