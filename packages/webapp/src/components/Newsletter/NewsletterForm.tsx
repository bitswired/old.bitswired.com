import { VStack } from '@chakra-ui/react';
import Button from 'components/Button';
import TextInput from 'components/Input/TextInput';
import { useForm } from 'react-hook-form';

function isEmail(email: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email) || `${email} is not a valid email`;
}

export interface NewsletterFormProps {
  onSubmit: () => void;
}

export default function NewsletterForm({ onSubmit }: NewsletterFormProps): JSX.Element {
  const { control, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <TextInput
            size="md"
            control={control}
            placeholder="Email"
            name="email"
            rules={{ required: 'Email required', validate: { isEmail } }}
          />

          <TextInput
            size="md"
            control={control}
            name="firstName"
            placeholder="First Name"
            rules={{ required: 'First name required' }}
          />
          <TextInput
            size="md"
            control={control}
            name="lastName"
            placeholder="Last Name"
            rules={{ required: 'Last name required' }}
          />
        </VStack>

        <br />

        <Button variant="secondary-solid" type="submit">
          Wire Up
        </Button>
      </form>
    </>
  );
}
