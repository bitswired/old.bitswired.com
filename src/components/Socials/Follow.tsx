import { Icon } from '@chakra-ui/icon';
import { HStack, LinkBox, LinkOverlay } from '@chakra-ui/layout';
import { socialsFollow } from 'config';
import React from 'react';

interface SocialIconProps {
  as: React.FunctionComponent;
  url: string;
  fontSize?: string;
}

export function SocialIcon({ as, url, fontSize = '32px' }: SocialIconProps): JSX.Element {
  return (
    <LinkBox>
      <LinkOverlay href={url} isExternal>
        <Icon color="primary" fontSize={fontSize} as={as} />
      </LinkOverlay>
    </LinkBox>
  );
}

export default function Follow(): JSX.Element {
  return (
    <HStack>
      {socialsFollow.map((x) => (
        <SocialIcon key={x.name} as={x.icon} url={x.url} />
      ))}
    </HStack>
  );
}
