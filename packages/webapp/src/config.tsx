import { FaDiscord, FaInstagram, FaLinkedin, FaReddit, FaTwitter } from 'react-icons/fa';

export const routes: Route[] = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/blog',
    name: 'blog'
  },
  // {
  //   path: "/resume",
  //   name: "resume",
  // },
  {
    path: '/about',
    name: 'about'
  }
];

export const socials = [
  { url: 'https://reddit.com', name: 'reddit', icon: <FaReddit /> },
  { url: 'https://twitter.com', name: 'twitter', icon: <FaTwitter /> },
  { url: 'https://linkedin.com', name: 'linkedin', icon: <FaLinkedin /> },
  { url: 'https://instagram.com', name: 'instagram', icon: <FaInstagram /> }
];

export const deoDefaults = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.bitswired.com/',
    site_name: 'Bits Wired'
  }
};

export const socialsFollow = [
  { url: 'https://discord.gg/GStmskX2g6', name: 'discord', icon: FaDiscord },
  { url: 'https://twitter.com/Bitswired', name: 'twitter', icon: FaTwitter },
  { url: 'https://www.instagram.com/bitswired/', name: 'intagram', icon: FaInstagram }
];
