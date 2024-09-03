'use client';
import { DataTable } from '../components/data-table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
import { ChartBarBig, Database } from 'lucide-react';
import { useColumns, useChart } from '@chartloapp/hooks';
import { RootState } from '@chartloapp/state';
import { Registry } from '../registry';
import { useSelector } from 'react-redux';
import { Sidebar } from '../components/sidebar';

const triggers = [
  {
    name: 'chart',
    icon: <ChartBarBig className="w-[1.1rem] h-[1.1rem]" />,
  },
  {
    name: 'data',
    icon: <Database className="w-[1.1rem] h-[1.1rem]" />,
  },
];

export const Playground = () => {
  const columns = useColumns();
  const { data, xAxisKey, chartConfig } = useChart();
  const chartType = useSelector((state: RootState) => state.chart.chartType);
  const ChartComponent = Registry[chartType] || Registry['bar'];
  return (
    <Tabs defaultValue="chart" className="w-full">
      <TabsList>
        {triggers.map((trigger) => (
          <TabsTrigger key={trigger.name} value={trigger.name}>
            {trigger.icon}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent className="flex justify-between gap-4" value="chart">
        <ChartComponent
          data={data}
          xAxisKey={xAxisKey}
          chartConfig={chartConfig}
        />
        <Sidebar />
      </TabsContent>
      <TabsContent value="data">
        <DataTable data={data} columns={columns} />
      </TabsContent>
    </Tabs>
  );
};
