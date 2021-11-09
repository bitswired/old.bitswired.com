import { Box, Center, Spinner, Stack, VStack } from '@chakra-ui/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Button from 'components/Button';
import TextInput from 'components/Input/TextInput';
import useNewsletterForm from 'hooks/newsletter-form';
import React from 'react';

function isEmail(email: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email) || `${email} is not a valid email`;
}

export default function NewsletterForm(): JSX.Element {
  const { control, onError, onExpire, onVerify, handleSubmit, captchaRef, loading } =
    useNewsletterForm();

  return (
    <Box position="relative">
      <form onSubmit={handleSubmit}>
        <VStack>
          <TextInput
            size="md"
            control={control}
            placeholder="Email"
            name="email"
            rules={{ required: 'Email required', validate: { isEmail } }}
            borderColor="primary"
          />

          <Stack w="100%" direction={['column', 'row']}>
            <TextInput
              size="md"
              control={control}
              name="firstName"
              placeholder="First Name"
              rules={{ required: 'First name required' }}
              borderColor="primary"
            />
            <TextInput
              size="md"
              control={control}
              name="lastName"
              placeholder="Last Name"
              rules={{ required: 'Last name required' }}
              borderColor="primary"
            />
          </Stack>
        </VStack>

        <br />

        <Button variant="secondary-solid" type="submit">
          Wire Up
        </Button>

        <HCaptcha
          sitekey="acc1764f-11de-455c-8547-1c5ce7bd8e35"
          onError={onError}
          onExpire={onExpire}
          onVerify={onVerify}
          ref={captchaRef}
          size="invisible"
        />
      </form>
      {loading && (
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bgColor="rgba(255, 255, 255, 0.5)"
        >
          <Center>
            <Spinner w="200px" h="200px" color="primary" emptyColor="secondary" />
          </Center>
        </Box>
      )}
    </Box>
  );
}
