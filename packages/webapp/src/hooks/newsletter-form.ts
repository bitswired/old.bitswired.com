import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { NewsletterContext } from 'context/newsletter';
import React from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

export interface UseNewsletterFormValues {
  control: Control<FieldValues>;
  onError: (err: string) => void;
  onExpire: () => void;
  onVerify: (token: any) => void;
  captchaRef: React.MutableRefObject<null>;
  handleSubmit: any;
  loading: boolean;
}

export default function useNewsletterForm(): UseNewsletterFormValues {
  const { control, handleSubmit, getValues } = useForm();
  const captchaRef = React.useRef(null);
  const toast = useToast();
  const mutation = useMutation(
    ({ token, ...data }: any) => {
      return axios.post('https://public-api.bitswired.workers.dev/subscribe', data, {
        // return axios.post('http://localhost:8787/subscribe', data, {
        headers: { 'captcha-token': token }
      });
    },
    {
      onSuccess: () => {
        toast({
          title: 'Successfully Subscribed!',
          status: 'success',
          position: 'top',
          isClosable: true
        });
        (captchaRef as any).current.resetCaptcha();
        newsletterContext && newsletterContext.subscribe();
      },
      onError: (error: any) => {
        toast({
          title: 'Error!',
          status: 'error',
          description: error?.response?.data,
          position: 'top',
          isClosable: true
        });
        (captchaRef as any).current.resetCaptcha();
      }
    }
  );

  const newsletterContext = React.useContext(NewsletterContext);

  const submit = () => {
    (captchaRef as any).current.execute();
  };

  const onVerify = (token: string) => {
    const email = getValues('email');
    const firstName = getValues('firstName');
    const lastName = getValues('lastName');

    mutation.mutate({ token, email, firstName, lastName });
  };

  const onExpire = () => {
    (captchaRef as any).current.resetCaptcha();
  };

  const onError = () => {
    (captchaRef as any).current.resetCaptcha();
  };

  return {
    control,
    onError,
    onExpire,
    onVerify,
    handleSubmit: handleSubmit(submit),
    captchaRef,
    loading: mutation.isLoading
  };
}
