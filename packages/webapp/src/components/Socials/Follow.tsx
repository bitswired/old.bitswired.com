import { HStack, Icon } from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import { socialsFollow } from 'config';
import React from 'react';

interface SocialIconProps {
  as: React.FunctionComponent;
  url: string;
}

function SocialIcon({ as, url }: SocialIconProps): JSX.Element {
  return (
    <LinkBox>
      <LinkOverlay href={url} isExternal>
        <Icon color="primary" fontSize="32px" as={as} />
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
