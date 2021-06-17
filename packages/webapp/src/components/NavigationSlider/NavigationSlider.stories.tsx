import { Box } from "@chakra-ui/react";
import { Story } from "@storybook/react";
import NavigationSlider, { NavigationSliderProps } from ".";

export default {
  title: "NavigationSlider",
  component: NavigationSlider,
};

const Template: Story<NavigationSliderProps> = (args) => (
  <Box
    w="100%"
    h="500px"
    bg="url('https://i.pinimg.com/originals/a4/e2/6e/a4e26e77ff64fce4348ebbef946cfba4.jpg')"
    bgSize="cover"
  >
    <NavigationSlider {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = { isOpen: true };
