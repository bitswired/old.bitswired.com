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
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { LineChartProps } from 'components/Charts/LineChart';
import LineChartDynamic from 'components/Charts/LineChart/dynamic';
// import CodeBlock, { CodeBlockProps } from 'components/CodeBlock';
import { CodeBlockProps } from 'components/CodeBlock';
import InternalLink from 'components/InternalLink';
import LazyImage from 'components/LazyImage';
// import LazyImage from 'components/LazyImage';
import dynamic from 'next/dynamic';
import { FaExclamationCircle, FaLightbulb } from 'react-icons/fa';

const DynamicCodeBlock = dynamic(() => import('components/CodeBlock'), {
  ssr: false
});

const DynamicLinLogLineChart = dynamic(() => import('oneoff-components/LinLogLineChart'), {
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
      <InternalLink href={href} passHref>
        <Link color="secondary" textDecoration="underline" {...p}>
          {props.children}
        </Link>
      </InternalLink>
    );
  } else
    return (
      <Link color="secondary" textDecoration="underline" isExternal {...props}>
        {props.children}
      </Link>
    );
}

function MDXInlineCodeBlock({ children }: CodeProps): JSX.Element {
  return (
    <Code bgColor="#EEE" color="black">
      {children}
    </Code>
  );
}

interface InfoWarnSectionProps {
  children: JSX.Element;
}

function BitsOfInfoWarnSection({ children }: InfoWarnSectionProps): JSX.Element {
  return (
    // <Flex direction={['column', 'row']} w="100%" justify="space-between">
    <Flex direction={['column', 'row']} w="100%" justify="space-between">
      {children}
    </Flex>
  );
}

interface InfoWarnBlockProps {
  children: string;
}

function BitsOfInfoWarnBlockBuilder(type: 'info' | 'warning') {
  return function InfoWarnBlock({ children }: InfoWarnBlockProps) {
    const title = type === 'info' ? 'Application' : 'Pitfalls';
    const B = type === 'info' ? FaLightbulb : FaExclamationCircle;

    return (
      <Box w={['100%', '49%']}>
        <Heading as="h3">{title}</Heading>

        <VStack>
          {children.split('&').map((text: string) => (
            <HStack key="text" w="100%" align="flex-start">
              {/* <Icon as={B} color={type === 'info' ? 'primary' : 'secondary'} mt="0.25em" /> */}
              <Icon as={B} color="black" mt="0.25em" />
              <Box>{text.trim()}</Box>
            </HStack>
          ))}
        </VStack>
      </Box>
    );
  };
}

interface BitsOfNutshellProps {
  children: JSX.Element;
}

function BitsOfNutshell({ children }: BitsOfNutshellProps): JSX.Element {
  return (
    <Box>
      <Heading as="h2">Summary</Heading>
      {children}
    </Box>
  );
}

interface BitsOfSummaryProps {
  children: JSX.Element;
}

function BitsOfSummary({ children }: BitsOfSummaryProps): JSX.Element {
  return (
    <VStack
      bgGradient="linear( primary, secondary)"
      color="black"
      rounded="lg"
      py="2em"
      px="2em"
      sx={{ h2: { my: '0.5em !important' } }}>
      {children}
    </VStack>
  );
}

function LineC(props: any) {
  return <LineChartDynamic {...props} />;
}

function CodeBlock(props: CodeBlockProps) {
  return <DynamicCodeBlock {...props} />;
}

function LinLogLineChart(props: LineChartProps) {
  return <DynamicLinLogLineChart {...props} />;
}

export const mdxComponents = {
  LineC,
  BitsOfSummary,
  BitsOfNutshell,
  BitsOfInfoWarnSection,
  BitsOfInfoBlock: BitsOfInfoWarnBlockBuilder('info'),
  BitsOfWarnBlock: BitsOfInfoWarnBlockBuilder('warning'),
  Box,
  VStack,
  Figure: MDXImage,
  code: CodeBlock,
  inlineCode: MDXInlineCodeBlock,
  a: MDXLink,
  table: ({ children }: any) => (
    <Box p="1em" my="1em" rounded="md" border="solid #CCC 1px">
      {/* <Table variant="striped" colorScheme="teal" rounded="lg" w="100%"> */}
      <Table variant="striped" rounded="lg" w="100%" size="sm">
        {children}
      </Table>
    </Box>
  ),
  thead: Thead,
  tbody: Tbody,
  tfoot: Tfoot,
  tr: Tr,
  th: Th,
  td: Td,
  LinLogLineChart
  // table: Table,
};
