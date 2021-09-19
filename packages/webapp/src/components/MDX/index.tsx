import {
  Alert,
  AlertIcon,
  AspectRatio,
  Box,
  Center,
  Code,
  CodeProps,
  Flex,
  Heading,
  Link,
  LinkProps,
  ResponsiveValue,
  VStack
} from '@chakra-ui/react';
import LineChartDynamic from 'components/Charts/LineChart/dynamic';
// import CodeBlock, { CodeBlockProps } from 'components/CodeBlock';
import { CodeBlockProps } from 'components/CodeBlock';
// import LazyImage from 'components/LazyImage';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';

const DynamicCodeBlock = dynamic(() => import('components/CodeBlock'), {
  ssr: false
});

const DynamicLazyImage = dynamic(() => import('components/LazyImage'), {
  ssr: false
});

interface MDXImageProps {
  src: string;
  alt: string;
  title: string;
  ratio: number;
  width: string;
  maxWidth?: string;
  objectFit: ResponsiveValue<any>;
}

function MDXImage({
  src,
  alt,
  title,
  ratio,
  width,
  maxWidth,
  objectFit = 'cover'
}: MDXImageProps): JSX.Element {
  return (
    <Box as="figure">
      <Center>
        <AspectRatio ratio={ratio} width={width} maxW={maxWidth}>
          <DynamicLazyImage
            mx="auto"
            src={src}
            alt={alt}
            w="100%"
            objectFit={objectFit}
            substituteHeight="400px"
          />
        </AspectRatio>
      </Center>
      <Box as="figcaption">{title}</Box>
    </Box>
  );
}

function MDXLink(props: LinkProps): JSX.Element {
  if (props.href?.startsWith('/')) {
    const { href, ...p } = props;
    return (
      <NextLink href={href} passHref>
        <Link color="secondary" textDecoration="underline" {...p}>
          {props.children}
        </Link>
      </NextLink>
    );
  } else
    return (
      <Link color="secondary" textDecoration="underline" isExternal {...props}>
        {props.children}
      </Link>
    );
}

function MDXInlineCodeBlock({ children }: CodeProps): JSX.Element {
  return <Code bgColor="#EEE">{children}</Code>;
}

interface InfoWarnSectionProps {
  children: JSX.Element;
}

function InfoWarnSection({ children }: InfoWarnSectionProps): JSX.Element {
  return (
    <Flex direction={['column', 'row']} w="100%" justify="space-between">
      {children}
    </Flex>
  );
}

interface InfoWarnBlockProps {
  children: string;
}

function InfoWarnBlockBuilder(type: 'info' | 'warning') {
  return function InfoWarnBlock({ children }: InfoWarnBlockProps) {
    const title = type === 'info' ? 'Application' : 'Pitfalls';
    return (
      <Box w={['100%', '49%']}>
        <Heading as="h2">{title}</Heading>

        <VStack>
          {children.split('&').map((text: string) => (
            <Alert key="text" status={type}>
              <AlertIcon />
              {text.trim()}
            </Alert>
          ))}
        </VStack>
      </Box>
    );
  };
}

function LineC(props) {
  return <LineChartDynamic {...props} />;
}

function CodeBlock(props: CodeBlockProps) {
  return <DynamicCodeBlock {...props} />;
}

export const mdxComponents = {
  LineC,
  InfoWarnSection: InfoWarnSection,
  InfoBlock: InfoWarnBlockBuilder('info'),
  WarnBlock: InfoWarnBlockBuilder('warning'),
  Box,
  VStack,
  Figure: MDXImage,
  code: CodeBlock,
  inlineCode: MDXInlineCodeBlock,
  a: MDXLink
};
