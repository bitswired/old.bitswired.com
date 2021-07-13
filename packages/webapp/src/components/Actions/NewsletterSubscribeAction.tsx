import { Box } from '@chakra-ui/react';
import { NewsletterContext } from 'context/newsletter';
import React from 'react';

export interface NewsletterSubscribeActionProps {
  children: JSX.Element;
  display?: 'inline' | 'inline-block' | 'block';
}

export default function NewsletterSubscribeAction({
  children,
  display = 'block'
}: NewsletterSubscribeActionProps): JSX.Element | null {
  const newsletterContext = React.useContext(NewsletterContext);
  if (!newsletterContext) return null;
  const { open } = newsletterContext;

  return (
    <Box display={display} onClick={open} variant="secondary-solid">
      {children}
    </Box>
  );
}
