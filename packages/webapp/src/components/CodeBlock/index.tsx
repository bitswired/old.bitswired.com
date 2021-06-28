import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

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
      style={github}
      customStyle={{
        backgroundColor: '#EEE',
        fontSize: '16px'
      }}>
      {children}
    </SyntaxHighlighter>
  );
}
