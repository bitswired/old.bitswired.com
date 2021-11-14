const withPlugins = require('next-compose-plugins');


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    extension: /\.(md|mdx)$/,
    providerImportSource: '@mdx-js/react'
  }
});

module.exports = withPlugins(
  [
    withMDX({
      pageExtensions: ['js', 'ts', 'tsx', 'mdx', 'md']
    }),
    [withBundleAnalyzer]
  ],
  {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      // TODO: activate
      ignoreDuringBuilds: true
    },
    swcMinify: true
  }
);
