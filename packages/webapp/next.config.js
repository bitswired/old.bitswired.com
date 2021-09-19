const withPlugins = require('next-compose-plugins');

console.log(process.env.ANALYZE);

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
  withMDX({
    pageExtensions: ['js', 'ts', 'tsx', 'mdx']
  }),
  [withBundleAnalyzer]
]);
