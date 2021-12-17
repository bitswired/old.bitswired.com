import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Icon } from '@chakra-ui/icon';
import { Box, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/layout';
import { useTheme } from '@chakra-ui/system';
import { Collapse } from '@chakra-ui/transition';
import { codeLanguageIcons } from 'config';
import React from 'react';
import { FaChevronDown, FaChevronUp, FaGithub } from 'react-icons/fa';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('python', python);

interface CollapseCodeProps {
  children: JSX.Element;
}

function CollapseCode({ children }: CollapseCodeProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bgColor="#f6f6f6">
      <Button
        size="sm"
        variant="primary-link"
        onClick={onToggle}
        rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
      >
        {isOpen ? 'Collapse' : 'Expand'}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        {children}
      </Collapse>
    </Box>
  );
}

interface CodeProps {
  children: string;
  language: string;
}

function Code({ children, language }: CodeProps) {
  const theme = useTheme();

  return (
    <SyntaxHighlighter
      language={language}
      wrapLongLines={true}
      style={style}
      lineProps={{ style: { fontFamily: theme.fonts.mono } }}
      customStyle={{
        marginTop: 0,
        backgroundColor: '#f6f6f6',
        lineHeight: '3px',
        // fontSize: '0.8em',
        width: '100%',
        borderLeft: 'solid #BBB 0.5rem'
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export interface CodeBlockProps {
  children: string;
  className: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps): JSX.Element | null {
  if (!className) return <code>{children}</code>;

  const language = className.replace(/language-/, '') as CodeLanguage;
  const re = /---(.*?)---/s;
  const meta = JSON.parse(re.exec(children)![1]);
  const content = children.replace(re, '');

  return (
    <>
      <HStack
        mt="0.5em"
        alignItems="center"
        bgColor="#f6f6f6"
        p="0.5em"
        borderBottom="solid #BBB 1px"
        borderLeft="solid #BBB 0.5rem"
        fontFamily="sans"
      >
        <Box color="primary">{codeLanguageIcons[language]}</Box>
        {meta.filename && <Box fontSize="0.8em">{meta.filename}</Box>}
        {meta.title && (
          <Box fontSize="0.8em" fontWeight="bolder">
            - {meta.title} -
          </Box>
        )}
        {meta.github && (
          <Box>
            <LinkBox>
              <LinkOverlay href={meta.github} isExternal>
                <HStack>
                  <Text textDecor="underline" fontSize="0.6em !important" m="0 !important">
                    on Github
                  </Text>
                  <Icon as={FaGithub}></Icon>
                </HStack>
              </LinkOverlay>
            </LinkBox>
          </Box>
        )}
      </HStack>

      {meta.collapsable ? (
        <CollapseCode>
          <Code language={language}>{content}</Code>
        </CollapseCode>
      ) : (
        <Code language={language}>{content}</Code>
      )}
    </>
  );
}
