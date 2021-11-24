import { Icon } from '@chakra-ui/icon';
import {
  AspectRatio,
  Box,
  Center,
  Code,
  CodeProps,
  Flex,
  Heading,
  HStack,
  Link,
  LinkProps,
  VStack
} from '@chakra-ui/layout';
import { ResponsiveValue, useTheme } from '@chakra-ui/system';
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table';
import { LineChartProps } from 'components/Charts/LineChart';
import { CodeBlockProps } from 'components/CodeBlock';
import InternalLink from 'components/InternalLink';
import LazyImage from 'components/LazyImage';
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

export function MDXImage({
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
  children: JSX.Element[];
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
  items: string[];
}

function BitsOfInfoWarnBlockBuilder(type: 'info' | 'warning') {
  return function InfoWarnBlock({ items }: InfoWarnBlockProps) {
    const title = type === 'info' ? 'Application' : 'Pitfalls';
    const B = type === 'info' ? FaLightbulb : FaExclamationCircle;

    return (
      <Box w={['100%', '49%']}>
        <Heading as="h3">{title}</Heading>

        <VStack>
          {items.map((text: string) => (
            <HStack key="text" w="100%" align="flex-start">
              {/* <Icon as={B} color={type === 'info' ? 'primary' : 'secondary'} mt="0.25em" /> */}
              <Icon as={B} color="black" mt="0.25em" />
              <Box>{text}</Box>
            </HStack>
          ))}
        </VStack>
      </Box>
    );
  };
}

interface BitsOfNutshellProps {
  children: string;
}

function BitsOfNutshell({ children }: BitsOfNutshellProps): JSX.Element {
  return (
    <Box>
      <Heading as="h2">Summary</Heading>
      {children}
    </Box>
  );
}

const BitsOfInfoBlock = BitsOfInfoWarnBlockBuilder('info');
const BitsOfWarnBlock = BitsOfInfoWarnBlockBuilder('warning');

interface BitsOfSummaryProps {
  summary: string;
  infos: string[];
  warnings: string[];
}

export function BitsOfSummary(props: BitsOfSummaryProps): JSX.Element {
  return (
    <VStack
      bgGradient="linear( primary, secondary)"
      color="black"
      rounded="lg"
      py="2em"
      px="2em"
      sx={{ h2: { my: '0.5em !important' } }}
    >
      <BitsOfNutshell>{props.summary}</BitsOfNutshell>
      <BitsOfInfoWarnSection>
        <BitsOfInfoBlock items={props.infos} />
        <BitsOfWarnBlock items={props.warnings} />
      </BitsOfInfoWarnSection>
    </VStack>
  );
}

function CodeBlock(props: CodeBlockProps) {
  return <DynamicCodeBlock {...props} />;
}

export function LinLogLineChart(props: LineChartProps) {
  return <DynamicLinLogLineChart {...props} />;
}

function BlockBuilder(blockType: string) {
  interface BlockProps {
    children: JSX.Element;
  }

  return function Block({ children }: BlockProps) {
    const theme = useTheme();

    const color = theme.colors[blockType];
    const bgColor = `${color}33`;

    return (
      <Box borderLeft={`0.5em solid ${color}`} pl="1em" pr="1em" py="0.5em" bgColor={bgColor}>
        {children}
      </Box>
    );
  };
}

export const InfoBlock = BlockBuilder('info');
export const WarningBlock = BlockBuilder('warning');

export const components = {
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
  td: Td
};
