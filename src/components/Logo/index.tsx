import { Image } from '@chakra-ui/react';
import InternalLink from 'components/InternalLink';

export default function Logo(): JSX.Element {
  return (
    <InternalLink href="/">
      <a href="/">
        <Image src="logo/bitswired-logo.svg" h="1.8rem" my="0.5em" />
      </a>
    </InternalLink>
  );
}
