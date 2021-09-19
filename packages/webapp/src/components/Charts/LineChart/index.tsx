import { curveCatmullRom } from '@visx/curve';
import { LegendOrdinal } from '@visx/legend';
import { ParentSize } from '@visx/responsive';
import { AnimatedAxis, AnimatedLineSeries, DataContext, Tooltip, XYChart } from '@visx/xychart';
import React from 'react';

const data1 = [
  { x: 0, y: 50 },
  { x: 1, y: 10 },
  { x: 2, y: 20 }
];

const data2 = [
  { x: 0, y: 30 },
  { x: 1, y: 40 },
  { x: 2, y: 80 }
];

const accessors = {
  xAccessor: (d: any) => d.x,
  yAccessor: (d: any) => d.y
};

const ChartLegend = () => {
  console.log('TEST');

  const { colorScale, theme, margin } = React.useContext(DataContext);

  console.log(colorScale, theme, margin);

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

export type LineChartProps = {
  width: number;
  height: number;
  xLabel: string;
  yLabel: string;
};

export default function LineChart(props: LineChartProps) {
  console.log(props);
  return (
    <ParentSize>
      {(parent) => (
        <XYChart
          // height={parent.height}
          // width={parent.width}
          width={parent.width}
          height={props.height}
          xScale={{ type: 'linear' }}
          yScale={{ type: 'linear' }}>
          <AnimatedAxis orientation="left" label={props.xLabel} />
          <AnimatedAxis orientation="bottom" label={props.yLabel} />
          {/* <AnimatedGrid columns={false} numTicks={4} /> */}
          <AnimatedLineSeries
            dataKey="Line 1"
            data={data1}
            {...accessors}
            curve={curveCatmullRom}
          />
          <AnimatedLineSeries
            dataKey="Line 2"
            data={data2}
            {...accessors}
            curve={curveCatmullRom}
          />
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
  );
}
