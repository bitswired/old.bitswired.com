import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import MeAvatar from 'components/Me/MeAvatar';

export default function BlogPostAuthor(): JSX.Element {
  const avatarSize = useBreakpointValue({ base: 'lg', sm: 'xl', lg: 'xl' });
  const primaryFontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  const secondaryFontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

  return (
    <Flex alignItems="center" sx={{ gap: '30px' }}>
      <MeAvatar size={avatarSize} />
      <Box>
        <Text fontWeight="bold" fontSize={primaryFontSize}>
          Jimi Vaubien
        </Text>
        <Text fontSize={secondaryFontSize}>Machine Learning Engineer</Text>
      </Box>
    </Flex>
  );
}
