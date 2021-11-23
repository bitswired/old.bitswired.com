// const withPlugins = require('next-compose-plugins');
// const remarkGfm = require('remark-gfm');

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// });

// const withMDX = require('@next/mdx')({
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//     extension: /\.(md|mdx)$/,
//     providerImportSource: '@mdx-js/react'
//   }
// });

import withMDX from '@next/mdx';
import withPlugins from 'next-compose-plugins';
import remarkGfm from 'remark-gfm';

export default withPlugins(
  [
    withMDX({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      extension: /\.(md|mdx)$/,
      providerImportSource: '@mdx-js/react'
    })({
      pageExtensions: ['js', 'ts', 'tsx', 'mdx', 'md']
    })
    // withMDX({
    //   pageExtensions: ['js', 'ts', 'tsx', 'mdx', 'md']
    // }),
    // [withBundleAnalyzer]
  ],
  {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      // TODO: activate
      ignoreDuringBuilds: true
    },
    swcMinify: true,
    reactStrictMode: true
  }
);
