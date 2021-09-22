import {
  AspectRatio,
  Box,
  Center,
  Code,
  CodeProps,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  LinkProps,
  ResponsiveValue,
  VStack
} from '@chakra-ui/react';
import LineChartDynamic from 'components/Charts/LineChart/dynamic';
// import CodeBlock, { CodeBlockProps } from 'components/CodeBlock';
import { CodeBlockProps } from 'components/CodeBlock';
import LazyImage from 'components/LazyImage';
// import LazyImage from 'components/LazyImage';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { FaExclamationCircle, FaLightbulb } from 'react-icons/fa';

const DynamicCodeBlock = dynamic(() => import('components/CodeBlock'), {
  ssr: false
});

interface MDXImageProps {
  src: string;
  alt: string;
  title: string;
  ratio: number;
  width: string;
  responsive?: boolean;
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
  responsive = true,
  objectFit = 'cover'
}: MDXImageProps): JSX.Element {
  return (
    <Box as="figure">
      <Center>
        <AspectRatio ratio={ratio} width={width} maxW={maxWidth}>
          <LazyImage
            mx="auto"
            src={src}
            alt={alt}
            w="100%"
            responsive={responsive}
            objectFit={objectFit}
            substituteHeight="400px"
            sizes="(min-width: 48em) 800px, 100vw"
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
    // <Flex direction={['column', 'row']} w="100%" justify="space-between">
    <Flex
      direction={['column', 'row']}
      w="100%"
      justify="space-between"
      bg="black"
      color="white"
      rounded="lg"
      py="2em"
      px="2em"
      sx={{ h2: { my: '0.5em !important' } }}>
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
    const B = type === 'info' ? FaLightbulb : FaExclamationCircle;

    return (
      <Box w={['100%', '49%']}>
        <Heading as="h2">{title}</Heading>

        <VStack>
          {children.split('&').map((text: string) => (
            <HStack key="text" w="100%" align="flex-start">
              <Icon as={B} color={type === 'info' ? 'primary' : 'secondary'} mt="0.25em" />
              <Box>{text.trim()}</Box>
            </HStack>
          ))}
        </VStack>
      </Box>
    );
  };
}

function LineC(props: any) {
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