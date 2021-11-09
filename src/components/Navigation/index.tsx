import { Flex, Text } from '@chakra-ui/react';
import InternalLink from 'components/InternalLink';
import { routes } from 'config';
import { useRouter } from 'next/router';
import React from 'react';

interface HeaderNavItemProps {
  route: Route;
  isActive: boolean;
}

function NavigationItem({ route, isActive }: HeaderNavItemProps) {
  return (
    <Text
      mx={4}
      color={isActive ? 'secondary' : 'white'}
      _hover={
        isActive
          ? {}
          : {
              color: 'secondary',
              transform: 'scale(1.2)'
            }
      }
      transition="all 0.3s"
      cursor="pointer"
    >
      <InternalLink href={route.path}>{route.name}</InternalLink>
    </Text>
  );
}

export default function Navigation(): JSX.Element {
  const { pathname } = useRouter();
  const baseMatch = pathname.match(/(\/\w*)/);
  if (baseMatch === null) throw new Error('Invalid pathname');

  const base = baseMatch[1];

  return (
    <Flex fontSize="lg" textTransform="uppercase" color="white">
      {routes.map((x) => (
        <NavigationItem key={x.name} route={x} isActive={base === x.path} />
      ))}
    </Flex>
  );
}
