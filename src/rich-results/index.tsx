import { BLOG_DESCRIPTION, BLOG_HEADLINE, BLOG_URL, infos, LOGO_URL, SLOGAN } from 'config';
import Head from 'next/head';
import { JsonLd } from 'react-schemaorg';
import { jsonLdScriptProps } from 'react-schemaorg';
import { Blog, Brand, Organization, Person, TechArticle, WithContext } from 'schema-dts';
import { IMAGE_ME } from 'utils/static-urls';

const context = 'https://schema.org';

const JIMZER: WithContext<Person> = {
  '@context': context,
  '@type': 'Person',
  name: 'Jimi Vaubien',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: [
      'Swiss Federal Institute of Technology Lausanne (École Polytechnique Fédérale de Lausanne)'
    ]
  },
  knowsAbout: ['Artificial Intelligence', 'Data Science', 'Computer Science'],
  image: IMAGE_ME
};

const BRAND: WithContext<Brand> = {
  '@context': context,
  '@type': 'Brand',
  name: 'Bitswired',
  logo: LOGO_URL,
  slogan: SLOGAN
};

const BITSWIRED: WithContext<Organization> = {
  '@context': context,
  '@type': 'Organization',
  name: 'Bitswired',
  brand: BRAND,
  email: infos.contactEmail,
  logo: LOGO_URL
};

export function PersonJimzerJsonLd(): JSX.Element {
  return <JsonLd<Person> item={JIMZER} />;
}

type TechArticleRequired =
  | 'url'
  | 'headline'
  | 'description'
  | 'image'
  | 'datePublished'
  | 'dateModified';
type TechArticleJsonLdProps = Pick<Required<TechArticle>, TechArticleRequired>;
export function TechArticleJsonLd(props: TechArticleJsonLdProps): JSX.Element {
  return (
    <Head>
      <script
        {...jsonLdScriptProps<TechArticle>({
          '@context': context,
          '@type': 'TechArticle',
          url: props.url,
          headline: props.headline,
          description: props.description,
          image: props.image,
          datePublished: props.datePublished,
          dateModified: props.dateModified,
          author: JIMZER,
          publisher: BITSWIRED
        })}
      />
    </Head>
  );
}

export function BlogJsonLd(): JSX.Element {
  return (
    <Head>
      <script
        {...jsonLdScriptProps<Blog>({
          '@context': context,
          '@type': 'Blog',
          url: BLOG_URL,
          headline: BLOG_HEADLINE,
          description: BLOG_DESCRIPTION,
          // TODO: fix that
          datePublished: '2021-09-01',
          // dateModified: "2021-09-01",
          author: JIMZER,
          publisher: BITSWIRED
        })}
      />
    </Head>
  );
}
