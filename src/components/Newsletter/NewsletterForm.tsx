import { Box, Center, Stack, StackDirection } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Button from 'components/Button';
import TextInput from 'components/Input/TextInput';
import useNewsletterForm from 'hooks/newsletter-form';
import React from 'react';

function isEmail(email: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email) || `${email} is not a valid email`;
}

interface NewsletterFormProps {
  direction?: StackDirection;
  inputTextColor?: string;
}

export default function NewsletterForm({
  direction = 'row',
  inputTextColor
}: NewsletterFormProps): JSX.Element {
  const { control, onError, onExpire, onVerify, handleSubmit, captchaRef, loading } =
    useNewsletterForm();

  return (
    <Box position="relative">
      <form onSubmit={handleSubmit}>
        <Stack direction="row">
          <TextInput
            size="md"
            color={inputTextColor}
            control={control}
            placeholder="Email"
            name="email"
            rules={{ required: 'Email required', validate: { isEmail } }}
            borderColor="primary"
          />
          <Button variant="secondary-solid" type="submit">
            Wire Up
          </Button>
        </Stack>

        <br />

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
