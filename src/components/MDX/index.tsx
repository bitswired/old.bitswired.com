import { useBoolean } from '@chakra-ui/hooks';
import { Icon } from '@chakra-ui/icon';
import { Image } from '@chakra-ui/image';
import {
  AspectRatio,
  Box,
  Code,
  CodeProps,
  Flex,
  Heading,
  HStack,
  Link,
  LinkProps,
  Text,
  VStack
} from '@chakra-ui/layout';
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/modal';
import { ResponsiveValue, useTheme } from '@chakra-ui/system';
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table';
import { LineChartProps } from 'components/Charts/LineChart';
import { CodeBlockProps } from 'components/CodeBlock';
import InternalLink from 'components/InternalLink';
import LazyImage from 'components/LazyImage';
import dynamic from 'next/dynamic';
import { FaExclamationCircle, FaLightbulb } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';

const DynamicCodeBlock = dynamic(() => import('components/CodeBlock'), {
  ssr: false
});

const DynamicLinLogLineChart = dynamic(() => import('oneoff-components/LinLogLineChart'), {
  ssr: false
});

interface ImageModalProps {
  children: JSX.Element;
  onClose: () => void;
  isOpen: boolean;
}

function ImageModal({ children, onClose, isOpen }: ImageModalProps) {
  if (isOpen) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent m="auto" maxW={['100vw', '100vw', '1600px']} p="1em">
          {children}
        </ModalContent>
      </Modal>
    );
  }

  return <>{children}</>;
}

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
  const [isModal, setIsModal] = useBoolean(false);

  if (src.endsWith('svg')) {
    return (
      <LazyLoad height={100} once>
        <ImageModal onClose={setIsModal.toggle} isOpen={isModal}>
          <VStack as="figure" my="3em" onClick={setIsModal.toggle} spacing="1em">
            <AspectRatio ratio={ratio} width={width} maxW={isModal ? '100%' : maxWidth}>
              <Image src={src} alt={alt} w="100px" objectFit={objectFit} />
            </AspectRatio>
            <Text as="figcaption" fontStyle="italic" textAlign="center">
              {title}
            </Text>
          </VStack>
        </ImageModal>
      </LazyLoad>
    );
  }

  return (
    <LazyLoad height={100} once>
      <ImageModal onClose={setIsModal.toggle} isOpen={isModal}>
        <VStack as="figure" my="3em" onClick={setIsModal.toggle} spacing="1em">
          <AspectRatio ratio={ratio} width={width} maxW={isModal ? '100%' : maxWidth}>
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
          <Text as="figcaption" fontStyle="italic" textAlign="center">
            {title}
          </Text>
        </VStack>
      </ImageModal>
    </LazyLoad>
  );
}

function MDXLink(props: LinkProps): JSX.Element {
  if (props.href?.startsWith('/')) {
    const { href, ...p } = props;
    return (
      <InternalLink href={href} passHref>
        <Link color="secondary1" textDecoration="underline" {...p}>
          {props.children}
        </Link>
      </InternalLink>
    );
  } else
    return (
      <Link color="secondary1" textDecoration="underline" isExternal {...props}>
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
              {/* <Icon as={B} color={type === 'info' ? 'primary1' : 'secondary1'} mt="0.25em" /> */}
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
      bgGradient="linear(primary1, white)"
      bgColor="primary1"
      shadow="xl"
      color="333"
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
  if (!props.className) return <Code>{props.children}</Code>;

  return (
    <LazyLoad height={100} once>
      <DynamicCodeBlock {...props} />
    </LazyLoad>
  );
}

export function LinLogLineChart(props: LineChartProps) {
  return (
    <LazyLoad height={100} once>
      <DynamicLinLogLineChart {...props} />
    </LazyLoad>
  );
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
  InfoBlock,
  WarningBlock,
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
