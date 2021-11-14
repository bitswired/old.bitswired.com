import { MDXProvider } from '@mdx-js/react';
import { components } from 'components/MDX';
import Post from 'content/bitsof-python-builtin-caching/index.mdx';

function A() {
  console.log('objecJDIDIIDIt');
  return <div> AA </div>;
}

export default function PostPage(): JSX.Element {
  return (
    <MDXProvider components={components}>
      <Post />
    </MDXProvider>
  );
}
