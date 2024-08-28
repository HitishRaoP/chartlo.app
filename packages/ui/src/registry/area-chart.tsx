import {
  AreaChart as BaseAreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { ChartContainer, ChartTooltipContent } from '../components/chart';
import type { ChartConfig, Data } from '@chartloapp/csv2chart';

export type BarChartProps = {
  data: Data[];
  xAxisKey: string;
  chartConfig: ChartConfig;
};

export const AreaChart = ({ data, xAxisKey, chartConfig }: BarChartProps) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[calc(100vh-8rem)] w-full rounded-lg border"
    >
      <BaseAreaChart className="w-full overflow-x-auto" data={data}>
        <CartesianGrid slope={3} horizontal={true} vertical={true} />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip cursor content={<ChartTooltipContent />} />
        <Legend />
        {Object.keys(chartConfig).map((key) => (
          <Area key={key} dataKey={key} fill={chartConfig[key].color} />
        ))}
      </BaseAreaChart>
    </ChartContainer>
  );
};
