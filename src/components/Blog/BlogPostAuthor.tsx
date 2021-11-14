import { Box, Flex, Text } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import InternalLink from 'components/InternalLink';
import MeAvatar from 'components/Me/MeAvatar';

export default function BlogPostAuthor(): JSX.Element {
  const avatarSize = useBreakpointValue({ base: 'lg', sm: 'lg', lg: 'lg' });
  const primaryFontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'md' });
  const secondaryFontSize = useBreakpointValue({ base: 'sm', md: 'sm', lg: 'sm' });

  return (
    <InternalLink href="/about#me">
      <a href="/about#me">
        <Flex alignItems="center" sx={{ gap: '30px' }}>
          <MeAvatar size={avatarSize} />
          <Box>
            <Text fontWeight="bold" fontSize={primaryFontSize}>
              Jimi Vaubien
            </Text>
            <Text fontSize={secondaryFontSize}>Machine Learning Engineer</Text>
          </Box>
        </Flex>
      </a>
    </InternalLink>
  );
}
