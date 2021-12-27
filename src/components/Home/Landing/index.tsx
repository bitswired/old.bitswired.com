import { Box, Center, HStack, Text } from '@chakra-ui/layout';
import NewsletterForm from 'components/Newsletter/NewsletterForm';

export default function Landing(): JSX.Element {
  return (
    <Box
      height="100vh"
      position="relative"
      // bgImage={{
      //   base: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${IMAGE_HOME_MOBILE}')`,
      //   md: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${IMAGE_HOME}')`
      // }}
      // bgImage="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/video.mp4)"
      bgPosition="center -100px"
      bgSize="cover"
      pt="5em"
      px="1em"
      fontSize={['md', 'xl']}
    >
      <video
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: 1
        }}
        muted
        playsInline
        onCanPLay="this.muted=true"
        autoPlay
        loop
        src="/video.mp4"
      />
      <Box
        top={0}
        left={0}
        position="absolute"
        zIndex={100}
        w="100%"
        h="100%"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))"
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
            {/* <NewsletterSubscribeAction>
              <Button variant="secondary-solid">subscribe</Button>
            </NewsletterSubscribeAction> */}
          </HStack>
        </Center>
        <Center py="1em">
          <Box>
            <NewsletterForm direction="row" inputTextColor="primary" />
          </Box>
        </Center>
      </Box>

      {/* <Center py="1em">
        <HStack>
          <Text color="white" fontSize="1em">
            Join the Discord community!
          </Text>
          <SocialIcon as={FaDiscord} url="https://discord.gg/GStmskX2g6" fontSize="60px" />
        </HStack>
      </Center> */}
    </Box>
  );
}
