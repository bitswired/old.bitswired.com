import { Box, Center } from '@chakra-ui/react';
import { curveCatmullRom } from '@visx/curve';
import { LegendOrdinal } from '@visx/legend';
import { ParentSize } from '@visx/responsive';
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  DataContext,
  Tooltip,
  XYChart
} from '@visx/xychart';
import React from 'react';

const accessors = {
  xAccessor: (d: any) => d.x,
  yAccessor: (d: any) => d.y
};

const ChartLegend = () => {
  const { colorScale, theme, margin } = React.useContext(DataContext);

  return (
    <LegendOrdinal
      direction="row"
      itemMargin="8px 8px 8px 0"
      scale={colorScale!}
      labelFormat={(label) => label.replace('-', ' ')}
      legendLabelProps={{ color: 'white' }}
      shape="line"
      style={{
        backgroundColor: theme!.backgroundColor,
        marginTop: -24,
        paddingLeft: margin!.left,
        color: 'red',
        display: 'flex' // required in addition to `direction` if overriding styles
      }}
    />
  );
};

type ScaleType = 'linear' | 'log';

interface Scale {
  type: ScaleType;
}

export type LineChartProps = {
  title: number;
  width: number;
  height: number;
  xLabel: string;
  yLabel: string;
  xScale: Scale;
  yScale: Scale;
  numXTicks?: number;
  numYTicks?: number;
  gridNumXTicks?: number;
  gridNumYTicks?: number;
  series: any[];
};

const defaultProps = {
  xScale: { type: 'linear' },
  yScale: { type: 'linear' }
};

export default function LineChart(props: LineChartProps): JSX.Element {
  return (
    <Box w={props.width} bgColor="#EEE" rounded="lg" overflow="hidden">
      <Center px="2em" pt="1em" textAlign="center">
        {props.title}
      </Center>
      <ParentSize>
        {(parent) => (
          <XYChart
            // height={parent.height}
            // width={parent.width}
            margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
            width={parent.width}
            height={props.height}
            xScale={props.xScale}
            yScale={props.yScale}
          >
            <AnimatedAxis orientation="left" label={props.xLabel} numTicks={props.numYTicks} />
            <AnimatedAxis orientation="bottom" label={props.yLabel} numTicks={props.numXTicks} />
            <AnimatedGrid columns={false} numTicks={props.gridNumYTicks} />

            {props.series.map((serie) => (
              <AnimatedLineSeries
                key={serie.key}
                dataKey={serie.key}
                data={serie.data}
                {...accessors}
                curve={curveCatmullRom}
              />
            ))}

            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showVerticalCrosshair
              showSeriesGlyphs
              renderTooltip={({ tooltipData, colorScale }) => (
                <div>
                  <div style={{ color: colorScale!(tooltipData!.nearestDatum!.key) }}>
                    {tooltipData!.nearestDatum!.key}
                  </div>
                  {accessors.xAccessor(tooltipData!.nearestDatum!.datum)}
                  {', '}
                  {accessors.yAccessor(tooltipData!.nearestDatum!.datum)}
                </div>
              )}
            />
            <ChartLegend />
          </XYChart>
        )}
      </ParentSize>
    </Box>
  );
}

LineChart.defaultProps = defaultProps;
