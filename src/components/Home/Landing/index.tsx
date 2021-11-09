import { Box, Center, HStack, Text } from '@chakra-ui/react';
import NewsletterSubscribeAction from 'components/Actions/NewsletterSubscribeAction';
import Button from 'components/Button';
import { SocialIcon } from 'components/Socials/Follow';
import { FaDiscord } from 'react-icons/fa';
import { IMAGE_HOME, IMAGE_HOME_MOBILE } from 'utils/static-urls';

export default function Landing(): JSX.Element {
  return (
    <Box
      height="100vh"
      bgImage={{
        base: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${IMAGE_HOME_MOBILE}')`,
        md: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${IMAGE_HOME}')`
      }}
      bgPosition="center -100px"
      bgSize="cover"
      pt="5em"
      px="1em"
      fontSize={['md', 'xl']}
    >
      <Center py="1em">
        <Text
          fontSize="3em"
          color="white"
          w="40ch"
          textAlign="center"
          fontWeight="bold"
          bgGradient="linear(to-l, primary, secondary)"
          bgClip="text"
        >
          {/* Spreading Tech Knowledge from Programing up to Machine Learning */}
          Data, AI, Visualization and Web!
        </Text>
      </Center>

      <Center py="1em">
        <HStack>
          <Text color="white" fontSize="1em">
            Stay tuned! Join the newsletter
          </Text>
          <NewsletterSubscribeAction>
            <Button variant="secondary-solid">SUBSCRIBE</Button>
          </NewsletterSubscribeAction>
        </HStack>
      </Center>

      <Center py="1em">
        <HStack>
          <Text color="white" fontSize="1em">
            Join the Discord community!
          </Text>
          <SocialIcon as={FaDiscord} url="https://discord.gg/GStmskX2g6" fontSize="60px" />
        </HStack>
      </Center>
    </Box>
  );
}
