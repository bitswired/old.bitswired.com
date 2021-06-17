import { Story } from "@storybook/react";
import Landing, { LandingProps } from ".";

export default {
  title: "Home/Landing",
  component: Landing,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
      },
    },
  },
};

const Template: Story<LandingProps> = (args) => <Landing {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "lg",
};
