import { Icon } from '@chakra-ui/icon';
import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/modal';
import { FaCheck } from 'react-icons/fa';

import NewsletterForm from './NewsletterForm';

function Footer() {
  return (
    <Text>
      Never miss out our{' '}
      <Box as="span" fontWeight="bold">
        insightful
      </Box>
      , regular tech content
    </Text>
  );
}

function Body() {
  return (
    <VStack alignItems="stretch" spacing="2em">
      <Box>
        <Text fontSize="lg">
          Bitswired provide tech tips, programming tutorials, in depth guides and curated tech news!
        </Text>
      </Box>

      <NewsletterForm size={{ base: 'md', sm: 'lg' }} />
    </VStack>
  );
}

function NotSubscribed() {
  return (
    <>
      <ModalHeader fontSize="2xl">Wire Up to the Newletter</ModalHeader>
      <ModalBody>
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
