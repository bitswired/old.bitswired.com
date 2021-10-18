import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Link,
  Text,
  VStack
} from '@chakra-ui/react';
import NewsletterSubscribeAction from 'components/Actions/NewsletterSubscribeAction';
import Button from 'components/Button';
import InternalLink from 'components/InternalLink';
import Logo from 'components/Logo';
import Follow from 'components/Socials/Follow';
import { infos, routes } from 'config';
import { useRouter } from 'next/router';
import React from 'react';

function Actions() {
  return (
    <VStack spacing="2em">
      <HStack>
        <Text color="white">Fortnightly curated content</Text>
        <NewsletterSubscribeAction>
          <Button size="sm" variant="secondary-solid">
            SUBSCRIBE
          </Button>
        </NewsletterSubscribeAction>
      </HStack>

      <Box>
        <Text display="inline" color="white">
          Not yet a member?
        </Text>{' '}
        <Link
          href={infos.discrodInvite}
          title="Discord invitation"
          isExternal
          display="inline"
          color="primary"
          textDecoration="underline">
          Join the Discord
        </Link>
      </Box>
    </VStack>
  );
}

interface NavigationItemProps {
  route: Route;
  isActive: boolean;
}

function NavigationMobileItem({ route, isActive }: NavigationItemProps) {
  return (
    <Text
      mx={4}
      color={isActive ? 'secondary' : 'white'}
      textTransform="uppercase"
      _hover={
        isActive
          ? {}
          : {
              color: 'secondary',
              transform: 'scale(1.2)'
            }
      }
      transition="all 0.3s"
      cursor="pointer"
      fontSize={{ base: 'xl', md: '4xl' }}>
      <InternalLink href={route.path}>{route.name}</InternalLink>
    </Text>
  );
}

export interface NavigationSliderProps {
  isOpen: boolean;
  onSliderClose: () => void;
}

export default function NavigationSlider({
  isOpen,
  onSliderClose
}: NavigationSliderProps): JSX.Element {
  const { pathname } = useRouter();

  const baseMatch = pathname.match(/(\/\w*)/);
  if (baseMatch === null) throw new Error('Invalid pathname');
  const base = baseMatch[1];

  return (
    <>
      <Drawer onClose={onSliderClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent
          bgColor="rgba(0,0,0,0.5)"
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)'
          }}
          onClick={onSliderClose}>
          <DrawerBody position="relative">
            <Logo />

            <VStack spacing="4em">
              <VStack
                m="auto"
                w="max-content"
                textAlign="center"
                mt={16}
                align="center"
                justify="center">
                {routes.map((x) => (
                  <NavigationMobileItem key={x.name} route={x} isActive={base === x.path} />
                ))}
              </VStack>

              <Divider />

              <Actions />

              <Divider />

              <Follow />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
