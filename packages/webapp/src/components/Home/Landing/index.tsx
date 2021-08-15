import { Box, Center, HStack, Text } from '@chakra-ui/react';
import NewsletterSubscribeAction from 'components/Actions/NewsletterSubscribeAction';
import Button from 'components/Button';
import { SocialIcon } from 'components/Socials/Follow';
import { Fade } from 'react-awesome-reveal';
import { FaDiscord } from 'react-icons/fa';
import { IMAGE_HOME, IMAGE_HOME_MOBILE } from 'utils/static-urls';

export default function Landing(): JSX.Element {
  return (
    <Box
      height="100vh"
      bgImage={{
        base: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${IMAGE_HOME_MOBILE}')`,
        md: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${IMAGE_HOME}')`
      }}
      bgPosition="center -100px"
      bgSize="cover"
      pt="5em"
      px="1em"
      fontSize={['md', 'xl']}>
      <Fade cascade duration={500} triggerOnce>
        <Center py="1em">
          <Text fontSize="2em" color="white" w="40ch" textAlign="center" fontWeight="bold">
            Spreading Tech Knowledge from Programing up to Machine Learning
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
      </Fade>
    </Box>
  );
}
