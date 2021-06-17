import { Story } from "@storybook/react";
import Features from ".";

export default {
  title: "Home/Features",
  component: Features,
};

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Features {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
