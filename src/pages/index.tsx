import Features from 'components/Home/Features';
import Landing from 'components/Home/Landing';
import { NextSeo } from 'next-seo';
import React from 'react';

export default function LandingPage(): JSX.Element {
  const url = 'https://www.bitswired.com';
  const title = 'Bitswired - Spreading Tech Knowledge';
  const description =
    'Artificial Intelligence, Programming, ... and much more! Tutorials, In-depth guides, Research papers ... Join the community!';
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          site_name: 'Bitswired'
        }}
        twitter={{
          handle: '@Bitswired',
          site: '@Bitswired'
        }}
      />
      <Landing />
      <Features />
    </>
  );
}
