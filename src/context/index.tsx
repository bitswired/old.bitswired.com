import MobileMenuContextProvider from './mobile-menu';
import NewsletterContextProvider from './newsletter';

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default function ContextsProvider({ children }: ContextProviderProps): JSX.Element {
  return (
    <MobileMenuContextProvider>
      <NewsletterContextProvider>{children}</NewsletterContextProvider>
    </MobileMenuContextProvider>
  );
}
