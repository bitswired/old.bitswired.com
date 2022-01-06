import { Icon } from '@chakra-ui/icon';
import { AspectRatio, Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/modal';
import { Image } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { IMAGE_WIREUP } from 'utils/static-urls';

import NewsletterForm from './NewsletterForm';

function Footer() {
  return (
    <Text w="100%">
      Get regular{' '}
      <Box as="span" fontWeight="bold">
        content and updates
      </Box>
      !
    </Text>
  );
}

function Body() {
  return (
    <>
      <AspectRatio ratio={16 / 9} maxH="300px">
        <Image
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
          objectFit="cover"
          src={IMAGE_WIREUP}
        />
      </AspectRatio>

      <VStack alignItems="stretch" spacing="2em" p="2em" pb={0}>
        <Box>
          <Heading as="h1" fontSize="2em">
            Subscribe to the newsletter
          </Heading>
        </Box>

        <NewsletterForm size={{ base: 'md', sm: 'lg' }} />
      </VStack>
    </>
  );
}

function NotSubscribed() {
  return (
    <>
      {/* <ModalHeader fontSize="2xl">Wire Up to the Newletter</ModalHeader> */}
      <ModalBody p={0}>
        <Body />
      </ModalBody>
      <ModalFooter>
        <Footer />
      </ModalFooter>
    </>
  );
}

function Subscribed() {
  return (
    <>
      <ModalHeader fontSize="2xl">Subscribed</ModalHeader>
      <ModalBody>
        <HStack spacing="2em">
          <Icon color="primary" fontSize="8xl" as={FaCheck} />
          <Box>
            <Text fontSize="2xl">Thank You for subscribing</Text>
            <br />
            <Text fontSize="xl">Welcome aboard !</Text>
          </Box>
        </HStack>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
}

export interface NewsletterModalProps {
  isOpen: boolean;
  isSubscribed: boolean;
  onClose: () => void;
}

export default function NewsletterModal({
  isOpen,
  isSubscribed,
  onClose
}: NewsletterModalProps): JSX.Element {
  const a = useBreakpointValue(['md', 'lg', 'xl']);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={a}>
        <ModalOverlay />
        <ModalContent>{isSubscribed ? <Subscribed /> : <NotSubscribed />}</ModalContent>
      </Modal>
    </>
  );
}
