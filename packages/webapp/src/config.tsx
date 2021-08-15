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

export const deoDefaults = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.bitswired.com/',
    site_name: 'Bits Wired'
  }
};

export const socialsFollow = [
  { url: infos.discrodInvite, name: 'discord', icon: FaDiscord },
  { url: infos.twitterProfile, name: 'twitter', icon: FaTwitter }
  // { url: 'https://www.instagram.com/bitswired/', name: 'intagram', icon: FaInstagram }
];
