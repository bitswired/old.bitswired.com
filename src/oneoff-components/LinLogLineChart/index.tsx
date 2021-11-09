import { Box, Stack } from '@chakra-ui/layout';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import LineChart, { LineChartProps } from 'components/Charts/LineChart';
import React from 'react';

type YScaleMode = 'log' | 'linear';

export default function LinLogLineChart(props: LineChartProps): JSX.Element {
  const [yScaleMode, setYScaleMode] = React.useState('linear');

  return (
    <Box w="100%" bgColor="#EEE" rounded="lg" py="1em" my="1em">
      <LineChart {...props} yScale={{ type: yScaleMode as YScaleMode }} />
      <RadioGroup onChange={setYScaleMode} value={yScaleMode} px="2em">
        <Stack direction="row">
          <Radio size="sm" value="linear">
            Linear Scale
          </Radio>
          <Radio size="sm" value="log">
            Log Scale
          </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
}
