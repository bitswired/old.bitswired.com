import { Box } from '@chakra-ui/react';
import { Story } from '@storybook/react';

import LineChart, { LineChartProps } from '.';

export default {
  title: 'Charts/LineChart',
  component: LineChart
};

//👇 We create a “template” of how args map to rendering
const Template: Story<LineChartProps> = (props) => (
  <Box w="500px" h="500px">
    <LineChart {...props} />
  </Box>
);

//👇 Each story then reuses that template
export const Default = Template.bind({
  width: 500,
  height: 500
});
