import dynamic from 'next/dynamic';

// export const SimpleBarChartDynamic = dynamic(() => import('.'), { ssr: false }) as typeof LineChart;
const LineChartDynamic = dynamic(() => import('.'), { ssr: false });

export default LineChartDynamic;
