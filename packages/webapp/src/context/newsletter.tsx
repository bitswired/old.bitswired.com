import { useBoolean } from '@chakra-ui/react';
import React from 'react';

interface NewsletterContextInterface {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const NewsletterContext = React.createContext<NewsletterContextInterface | null>(null);

interface NewsletterContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default function NewsletterContextProvider({
  children
}: NewsletterContextProviderProps): JSX.Element {
  const [isOpen, { on, off }] = useBoolean(false);

  return (
    <NewsletterContext.Provider value={{ isOpen, open: on, close: off }}>
      {children}
    </NewsletterContext.Provider>
  );
}
