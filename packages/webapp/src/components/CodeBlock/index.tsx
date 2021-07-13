// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);

export interface CodeBlockProps {
  children: JSX.Element | string;
  className: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps): JSX.Element {
  const language = className.replace(/language-/, '');

  return (
    <SyntaxHighlighter
      language={language}
      wrapLongLines={true}
      style={prism}
      customStyle={{
        backgroundColor: '#EEE',
        fontSize: '16px'
      }}>
      {children}
    </SyntaxHighlighter>
  );
}
