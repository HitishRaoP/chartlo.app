'use client';

import { ChartConfig, Data } from '@chartloapp/csv2chart';
import { BarChart } from './bar-chart';
import { AreaChart } from './area-chart';

type ChartRegistry = {
  [key: string]: React.FC<{
    data: Data[];
    xAxisKey: string;
    chartConfig: ChartConfig;
  }>;
};

export const Registry: ChartRegistry = {
  bar: BarChart,
  area: AreaChart,
};
