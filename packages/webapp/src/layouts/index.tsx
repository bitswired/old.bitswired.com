import { Box, useDisclosure } from '@chakra-ui/react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import NewsletterModal from 'components/Newsletter/NewsletterModal';
import { NewsletterContext } from 'context/newsletter';
import React from 'react';

interface MainLayoutProps {
  children: JSX.Element[] | JSX.Element;
}
export function MainLayout({ children }: MainLayoutProps): JSX.Element | null {
  const { isOpen: isSliderOpen, onOpen: onSliderOpen, onClose: onSliderClose } = useDisclosure();

  const newsletterContext = React.useContext(NewsletterContext);
  if (!newsletterContext) return null;
  const { isOpen: isNewsletterModalOpen, close, isSubscribed } = newsletterContext;

  return (
    <>
      <Header
        isSliderOpen={isSliderOpen}
        onSliderOpen={onSliderOpen}
        onSliderClose={onSliderClose}
      />
      <Box>{children}</Box>
      <Footer />
      <NewsletterModal isOpen={isNewsletterModalOpen} onClose={close} isSubscribed={isSubscribed} />
    </>
  );
}
