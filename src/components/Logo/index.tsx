import { Image } from '@chakra-ui/image';
import InternalLink from 'components/InternalLink';

export default function Logo(): JSX.Element {
  return (
    <InternalLink href="/">
      <a href="/">
        <Image
          src="/logo/bitswired-logo.svg"
          my="0.5em"
          htmlWidth="137px"
          htmlHeight="32px"
          alt="logo"
        />
      </a>
    </InternalLink>
  );
}
