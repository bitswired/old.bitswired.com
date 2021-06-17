import MobileMenuContextProvider from "./mobile-menu";
import NewsletterContextProvider from "./newsletter";

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default function ({ children }: ContextProviderProps) {
  return (
    <MobileMenuContextProvider>
      <NewsletterContextProvider>{children}</NewsletterContextProvider>
    </MobileMenuContextProvider>
  );
}
