import { Story } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary-solid", "secondary-solid"],
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
      },
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>SUBSCRIBE</Button>
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary-solid",
};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, variant: "secondary-solid" };
