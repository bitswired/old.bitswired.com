import React from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';

export interface UseNewsletterFormValues {
  control: Control<FieldValues>;
  onError: (err: string) => void;
  onExpire: () => void;
  onVerify: (token: any) => void;
  captchaRef: React.MutableRefObject<null>;
  handleSubmit: any;
}

export default function useNewsletterForm(): UseNewsletterFormValues {
  const { control, handleSubmit /*getValues*/ } = useForm();
  const captchaRef = React.useRef(null);

  // const newsletterContext = React.useContext(NewsletterContext);

  const submit = () => {
    (captchaRef as any).current.execute();
  };

  const onVerify = (/*token: string*/) => {
    return captchaRef;
    // const email = getValues('email');
    // const firstName = getValues('firstName');
    // const lastName = getValues('lastName');

    // apolloClient
    //   .mutate({
    //     mutation: CREATE_CONTACT,
    //     variables: { contact: { email, firstName, lastName } },
    //     context: {
    //       headers: {
    //         'Captcha-Token': token
    //       }
    //     }
    //   })
    //   .then(() => {
    //     toast({
    //       title: 'Successfully Subscribed!',
    //       status: 'success',
    //       position: 'top',
    //       isClosable: true
    //     });
    //     (captchaRef as any).current.resetCaptcha();
    //     newsletterContext && newsletterContext.subscribe();
    //   })
    //   .catch((error) => {
    //     toast({
    //       title: 'Error!',
    //       status: 'error',
    //       description: error.graphQLErrors.map((x: GraphQLError) => x.message).join(' '),
    //       position: 'top',
    //       isClosable: true
    //     });
    //     (captchaRef as any).current.resetCaptcha();
    //   });
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
    captchaRef
  };
}
