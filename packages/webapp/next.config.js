const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    extension: /\.(md|mdx)$/
  }
});

module.exports = withPlugins([
  [withBundleAnalyzer],
  withMDX({
    pageExtensions: ['js', 'ts', 'tsx', 'mdx']
  })
]);
