import { useBoolean } from '@chakra-ui/hooks';
import React from 'react';

interface NewsletterContextInterface {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  isSubscribed: boolean;
  subscribe: () => void;
}

export const NewsletterContext = React.createContext<NewsletterContextInterface | null>(null);

interface NewsletterContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default function NewsletterContextProvider({
  children
}: NewsletterContextProviderProps): JSX.Element {
  const [isOpen, { on: open, off: close }] = useBoolean(false);
  const [isSubscribed, { on: subscribe }] = useBoolean(false);

  return (
    <NewsletterContext.Provider value={{ isOpen, open, close, isSubscribed, subscribe }}>
      {children}
    </NewsletterContext.Provider>
  );
}
