import { Icon } from '@chakra-ui/icon';
import { FaInstagram, FaLinkedin, FaReddit, FaTwitter } from 'react-icons/fa';
import { SiJavascript, SiPython, SiTypescript } from 'react-icons/si';

export const staticsBaseUrl = 'https://statics.bitswired.com';

export const routes: Route[] = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/blog',
    name: 'blog'
  },
  {
    path: '/about',
    name: 'about'
  }
];

export const infos = {
  discrodInvite: 'https://discord.gg/5fzZgatdwZ',
  linkedInProfile: 'https://www.linkedin.com/in/jimi-vaubien',
  twitterProfile: 'https://twitter.com/Bitswired',
  contactEmail: 'contact@bitswired.com'
};

export const socials = [
  { url: 'https://reddit.com', name: 'reddit', icon: <FaReddit /> },
  { url: 'https://twitter.com', name: 'twitter', icon: <FaTwitter /> },
  { url: 'https://linkedin.com', name: 'linkedin', icon: <FaLinkedin /> },
  { url: 'https://instagram.com', name: 'instagram', icon: <FaInstagram /> }
];

export const codeLanguageIcons: Record<CodeLanguage, JSX.Element> = {
  tsx: <Icon as={SiTypescript} />,
  ts: <Icon as={SiTypescript} />,
  js: <Icon as={SiJavascript} />,
  jsx: <Icon as={SiJavascript} />,
  python: <Icon as={SiPython} />
};

export const deoDefaults = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.bitswired.com/',
    site_name: 'Bits Wired'
  }
};

export const socialsFollow = [
  // { url: infos.discrodInvite, name: 'discord', icon: FaDiscord },
  { url: infos.twitterProfile, name: 'twitter', icon: FaTwitter }
  // { url: 'https://www.instagram.com/bitswired/', name: 'intagram', icon: FaInstagram }
];

// TODO : Proper url
export const LOGO_URL = 'https://www.bitswired.com';

export const SLOGAN = 'Embrace the Data Era!';

export const BLOG_URL = 'https://www.bitswired.com/blog';

export const BLOG_HEADLINE = 'Embrace the Data Era!';
export const BLOG_DESCRIPTION = 'Data, AI and Digital Technologies';
