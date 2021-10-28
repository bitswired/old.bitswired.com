import { Box, useDisclosure } from '@chakra-ui/react';
// import Footer from 'components/Footer';
import Header from 'components/Header';
//import NewsletterModal from 'components/Newsletter/NewsletterModal';
import { NewsletterContext } from 'context/newsletter';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const DynamicNewsletterModal = dynamic(() => import('components/Newsletter/NewsletterModal'), {
  ssr: false
});

const DynamicFooter = dynamic(() => import('components/Footer'), {
  ssr: false
});

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 }
// };

// const variants = {
//   hidden: { opacity: 0, translateX: '-1000px', transition: { type: 'linear', duration: 2 } },
//   enter: { opacity: 1, translateX: 0, transition: { type: 'linear', duration: 2 } },
//   exit: { opacity: 0, translateX: '-1000px', transition: { type: 'linear', duration: 2 } }
// };

const variants = {
  hidden: { opacity: 0, transition: { ease: 'easeOut', duration: 0.2 } },
  enter: { opacity: 1, transition: { ease: 'easeOut', duration: 0.2, delay: 0.2 } },
  exit: { opacity: 0, transition: { ease: 'easeOut', duration: 0.2 } }
};

const MotionBox = motion(Box);

interface MainLayoutProps {
  children: JSX.Element[] | JSX.Element;
}
export function MainLayout({ children }: MainLayoutProps): JSX.Element | null {
  const { pathname } = useRouter();
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
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <MotionBox
          key={pathname}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          mt="75px"
        >
          {children}
        </MotionBox>
      </AnimatePresence>
      <DynamicFooter />
      <DynamicNewsletterModal
        isOpen={isNewsletterModalOpen}
        onClose={close}
        isSubscribed={isSubscribed}
      />
    </>
  );
}
