import {
  Box,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
} from "@chakra-ui/react";

export interface FeatureCardProps {
  title: string;
  icon: JSX.Element;
  children: JSX.Element | string | JSX.Element[];
}

export default function FeatureCard({
  title,
  icon,
  children,
}: FeatureCardProps) {
  return (
    <Card>
      <Title>{title}</Title>
      <Body>{icon}</Body>
      <Footer>{children}</Footer>
    </Card>
  );
}

function Card(props) {
  const { size, variant, children, ...rest } = props;
  const styles = useMultiStyleConfig("FeatureCard", { size, variant });
  return (
    <Box __css={styles.card} {...rest}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
}

function Title(props) {
  const styles = useStyles();
  return <Box __css={styles.title} {...props} />;
}

function Body(props) {
  const styles = useStyles();
  return <Box __css={styles.body} {...props} />;
}

function Footer(props) {
  const styles = useStyles();
  return <Box __css={styles.footer} {...props} />;
}
