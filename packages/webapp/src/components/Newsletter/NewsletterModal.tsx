import {
  Box,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack
} from '@chakra-ui/react';
import { IMAGE_WIREUP } from 'utils/static-urls';

import NewsletterForm from './NewsletterForm';

export interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export default function NewsletterModal({
  isOpen,
  onClose,
  onSubmit
}: NewsletterModalProps): JSX.Element {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Subscribe to Bitswired Newsletter</ModalHeader>
          <ModalBody>
            <HStack spacing="3em">
              <VStack w="60%" alignItems="stretch" spacing="2em">
                <Box>
                  <Text>Wire Up to the Newsletter!</Text>
                  <Text>
                    Bitswired provide tech tips, programming tutorials, in depth guides and curated
                    tech news!
                  </Text>
                </Box>

                <NewsletterForm onSubmit={onSubmit} />
              </VStack>

              <Box w="40%" display={['none', 'block']}>
                <Image src={IMAGE_WIREUP} alt="wire up" rounded="lg" />
              </Box>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Text>
              Never miss out our{' '}
              <Box as="span" fontWeight="bold">
                insightful
              </Box>
              , regular tech content
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
