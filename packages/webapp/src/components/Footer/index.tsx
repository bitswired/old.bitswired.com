import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Button from 'components/Button';
import { routes } from 'config';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaReddit, FaTwitter } from 'react-icons/fa';

interface FooterSectionProps {
  title: JSX.Element | string;
  body: JSX.Element;
}

function FooterSection({ title, body }: FooterSectionProps) {
  return (
    <Box mx="auto">
      <Box color="white" fontSize="2xl" mb="1rem" mx="auto" w="max-content">
        {title}
      </Box>
      <Box>{body}</Box>
    </Box>
  );
}

function WireUpTitle() {
  return (
    <>
      <Text display="inline" color="primary">
        Wire Up!{' '}
      </Text>
      <Text display="inline">Subscribe</Text>
      <Text>To the Newsletter</Text>
    </>
  );
}

function WireUpBody() {
  return <Button variant="secondary-solid">SIGN UP</Button>;
}

function SocialsBody() {
  const p = { color: 'primary', fontSize: '1em', mx: '0.2em' };

  return (
    <Flex fontSize="2xl">
      <Box {...p}>
        <FaReddit />
      </Box>
      <Box {...p}>
        <FaTwitter />
      </Box>
      <Box {...p}>
        <FaLinkedin />
      </Box>
      <Box {...p}>
        <FaFacebook />
      </Box>
      <Box {...p}>
        <FaInstagram />
      </Box>
    </Flex>
  );
}

function PagesBody() {
  return (
    <Box color="white">
      {routes.map((route) => (
        <Box key={route.name} textAlign="center" _hover={{ color: 'secondary' }}>
          <Link href={route.path}>{route.name}</Link>
        </Box>
      ))}
    </Box>
  );
}

export interface FooterProps {
  a: string;
}

export default function Footer(): JSX.Element {
  return (
    <SimpleGrid
      columns={[1, 1, 3]}
      gap={16}
      bg="black"
      p={16}
      textAlign={['center', 'center', 'left']}>
      <FooterSection title={<WireUpTitle />} body={<WireUpBody />} />

      <FooterSection title="Socials" body={<SocialsBody />} />

      <FooterSection title="Pages" body={<PagesBody />} />
    </SimpleGrid>
  );
}
