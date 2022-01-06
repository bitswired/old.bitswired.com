// @ts-nocheck
import { MDXProvider } from '@mdx-js/react';
import { components } from 'components/MDX';
import Post from 'content/bitsof-python-builtin-caching/index.mdx';

export default function PostPage(): JSX.Element {
  return (
    <MDXProvider components={components}>
      <Post />
    </MDXProvider>
  );
}
