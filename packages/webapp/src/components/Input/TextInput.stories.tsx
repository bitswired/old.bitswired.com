import { Story } from '@storybook/react';
import { useForm } from 'react-hook-form';

import TextInput, { TextInputProps } from './TextInput';

export default {
  title: 'Inputs/TextInput',
  component: TextInput
};

const Template: Story<TextInputProps> = (arguments_) => {
  const { control } = useForm();

  return (
    <form>
      <TextInput {...arguments_} control={control} />
    </form>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'test',
  label: 'Test'
};
