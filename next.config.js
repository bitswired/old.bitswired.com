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

module.exports = withPlugins(
  [
    withMDX({
      pageExtensions: ['js', 'ts', 'tsx', 'mdx']
    }),
    [withBundleAnalyzer]
  ],
  {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true
    }
  }
);
