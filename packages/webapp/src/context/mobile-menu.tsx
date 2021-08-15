import React from 'react';

interface MobileMenuInterface {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const MobileMenuContext = React.createContext<MobileMenuInterface | null>(null);

interface MobileMenuContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default function MobileMenuContextProvider({
  children
}: MobileMenuContextProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <MobileMenuContext.Provider value={{ isOpen, open, close }}>
      {children}
    </MobileMenuContext.Provider>
  );
}
