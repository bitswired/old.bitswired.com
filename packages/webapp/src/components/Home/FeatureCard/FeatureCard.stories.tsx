import { Story } from "@storybook/react";
import { FaEnvelope } from "react-icons/fa";
import FeatureCard, { FeatureCardProps } from ".";

export default {
  title: "Home/FeatureCard",
  component: FeatureCard,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<FeatureCardProps> = (args) => (
  <FeatureCard {...args}>
    <>Test description test description.</>
  </FeatureCard>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  title: "Test Title",
  icon: <FaEnvelope />,
};
