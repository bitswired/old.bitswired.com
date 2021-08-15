import { Story } from '@storybook/react';

import MeAvatar, { MeAvatarProps } from './MeAvatar';

export default {
  title: 'Me/MeAvatar',
  component: MeAvatar,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg', 'xl', '2xl']
      }
    }
  }
};

const Template: Story<MeAvatarProps> = (arguments_) => <MeAvatar {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  size: '2xl'
};
