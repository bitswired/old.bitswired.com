import { Box, useDisclosure } from '@chakra-ui/react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import useHeaderVisible from 'hooks/header-visible';
import React from 'react';

interface MainLayoutProps {
  children: JSX.Element[] | JSX.Element;
}
export function MainLayout({ children }: MainLayoutProps): JSX.Element {
  const { isGoingDown, lock } = useHeaderVisible();
  const { isOpen: isSliderOpen, onOpen: onSliderOpen, onClose: onSliderClose } = useDisclosure();

  return (
    <>
      <Header
        isGoingDown={isGoingDown}
        lock={lock}
        isSliderOpen={isSliderOpen}
        onSliderOpen={onSliderOpen}
        onSliderClose={onSliderClose}
      />
      <Box>{children}</Box>
      <Footer />
    </>
  );
}
