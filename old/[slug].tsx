export const x = 2;
// import BlogPost from 'components/Blog/BlogPost';
// import { mdxComponents } from 'components/MDX';
// import { infos } from 'config';
// import { NextSeo } from 'next-seo';
// import React from 'react';
// import { TechArticleJsonLd } from 'rich-results';
// import { getAllPosts } from 'utils/admin';

// interface BlogPostPageProps {
//   meta: BlogPostMeta;
//   mdxSource: any;
// }

// export default function BlogPostPage({ meta, mdxSource }: BlogPostPageProps): JSX.Element {
//   const url = `https://www.bitswired.com/blog/${meta.slug}`;
//   return (
//     <>
//       <NextSeo
//         title={meta.title}
//         description={meta.description}
//         canonical={url}
//         openGraph={{
//           url,
//           title: meta.title,
//           description: meta.description,
//           images: meta.images.map((x) => ({ url: x })),
//           site_name: 'Bitswired',
//           article: {
//             publishedTime: meta.datePublished,
//             modifiedTime: meta.dateModified,
//             section: meta.category,
//             authors: [infos.linkedInProfile],
//             tags: meta.tags
//           }
//         }}
//         twitter={{
//           handle: '@bitswired',
//           site: '@bitswired'
//         }}
//       />
//       <TechArticleJsonLd
//         url={url}
//         headline={meta.title}
//         description={meta.description}
//         image={meta.images}
//         datePublished={meta.datePublished}
//         dateModified={meta.dateModified}
//       />
//       {/* <BlogPost meta={meta} mdxRendered={<MDXRemote {...mdxSource} components={mdxComponents} />} /> */}
//     </>
//   );
// }

// export async function getStaticProps({ params }: any) {
//   const posts = await getAllPosts();

//   const { meta, content, data }: any = posts.find((p: any) => p.meta.slug === params.slug);

//   const mdxSource = await serialize(content, { scope: { data } });

//   return {
//     props: { meta, mdxSource, data }
//   };
// }

// export async function getStaticPaths() {
//   const posts = await getAllPosts();
//   return {
//     paths: posts.map((x: any) => ({
//       params: {
//         slug: x.meta.slug
//       }
//     })),
//     fallback: false
//   };
// }
