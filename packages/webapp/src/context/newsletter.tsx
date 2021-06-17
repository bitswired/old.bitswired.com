import React from "react";

interface NewsletterContextInterface {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewsletterContext = React.createContext<NewsletterContextInterface | null>(
  null
);

interface NewsletterContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default function ({ children }: NewsletterContextProviderProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <NewsletterContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NewsletterContext.Provider>
  );
}
