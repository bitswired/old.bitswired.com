import { Box, StylesProvider, useMultiStyleConfig, useStyles } from '@chakra-ui/react';

export interface FeatureCardProps {
  title: string;
  icon: JSX.Element;
  children: JSX.Element | string;
}

export default function FeatureCard({ title, icon, children }: FeatureCardProps): JSX.Element {
  return (
    <Card>
      <Title>{title}</Title>
      <Body>{icon}</Body>
      <Footer>{children}</Footer>
    </Card>
  );
}

interface CardProps {
  children: JSX.Element[];
}

function Card({ children }: CardProps) {
  const styles = useMultiStyleConfig('FeatureCard', {});
  return (
    <Box __css={styles.card}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
}

interface TitleProps {
  children: string;
}

function Title({ children }: TitleProps) {
  const styles = useStyles();
  return <Box __css={styles.title}>{children}</Box>;
}

interface BodyProps {
  children: JSX.Element;
}

function Body({ children }: BodyProps) {
  const styles = useStyles();
  return <Box __css={styles.body}>{children}</Box>;
}

interface FooterProps {
  children: JSX.Element | string;
}

function Footer({ children }: FooterProps) {
  const styles = useStyles();
  return <Box __css={styles.footer}>{children}</Box>;
}
