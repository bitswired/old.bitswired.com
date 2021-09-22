import { Box } from '@chakra-ui/react';
import { Story } from '@storybook/react';

import withRipples from '.';

export default {
  title: 'HOC/Ripples',
  component: Box,
  argTypes: {
    onClick: { action: 'onClick' }
  }
};

function A({ onClick }: any): JSX.Element {
  function Test() {
    return <Box w="200px" h="200px" m="auto" bgColor="black" onClick={onClick}></Box>;
  }

  const X = withRipples(Test, { display: 'inline-block' });

  return (
    <>
      <X />
    </>
  );
}

const Template: Story<any> = (arguments_) => <A {...arguments_} />;

export const Default = Template.bind({});
Default.args = {};
