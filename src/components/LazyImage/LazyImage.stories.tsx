import { Box } from '@chakra-ui/layout';
import { Story } from '@storybook/react';

import LazyImage, { LazyImageProps } from '.';

export default {
  title: 'LazyImage',
  component: LazyImage
};

const Template: Story<LazyImageProps> = (arguments_) => (
  <Box>
    <LazyImage height="400px" {...arguments_} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://wallpapercave.com/wp/wp4676582.jpg'
};
