'use client';
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@chartloapp/state';
import { ChartConfig, getData } from '@chartloapp/csv2chart';
import { setChartConfig, setData } from '@chartloapp/state/src/slices/chart';
import { getRandomColor } from '@chartloapp/lib';

export const useChart = () => {
  const dispatch = useDispatch();
  const url = useSelector((state: RootState) => state.chart.url);
  const fields = useSelector((state: RootState) => state.chart.fields);
  const xAxisKey = useSelector((state: RootState) => state.chart.fields[0]);
  const chartConfig = useSelector(
    (state: RootState) => state.chart.chartConfig,
  );
  const data = useSelector((state: RootState) => state.chart.data);

  // Ref to keep track of whether the chart config has changed
  const chartConfigRef = useRef(chartConfig);

  // Fetch data when URL changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getData(url);
        dispatch(setData(results));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  // Generate chart config only when fields or data change
  const generatedConfig = useMemo(() => {
    if (data.length === 0) return chartConfig;

    const newConfig: ChartConfig = {};
    fields.forEach((key) => {
      if (key !== xAxisKey) {
        newConfig[key] = {
          label: key,
          color: chartConfig[key]?.color || getRandomColor(),
        };
      }
    });
    return newConfig;
  }, [data, fields, xAxisKey, chartConfig]);

  useEffect(() => {
    // Check if the new config is different from the current one
    if (
      JSON.stringify(generatedConfig) !== JSON.stringify(chartConfigRef.current)
    ) {
      dispatch(setChartConfig(generatedConfig));
      chartConfigRef.current = generatedConfig;
    }
  }, [generatedConfig, dispatch]);

  return {
    data,
    xAxisKey,
    chartConfig: generatedConfig,
  };
};
