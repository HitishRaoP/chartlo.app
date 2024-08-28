'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@chartloapp/state';
import { useEffect, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Data, getData } from '@chartloapp/csv2chart';

export const useColumns = (): ColumnDef<Data>[] => {
  const url = useSelector((state: RootState) => state.chart.url);
  const [columns, setColumns] = useState<ColumnDef<Data>[]>([]);
  useEffect(() => {
    const fetchColumns = async () => {
      if (!url) return;

      try {
        const { headers } = await getData(url);
        const cols = headers.map((header) => ({
          accessorKey: header,
          header: header,
        }));
        setColumns(cols);
      } catch (error) {
        console.error('Failed to fetch columns:', error);
      }
    };
    fetchColumns();
  }, [url]);
  return columns;
};
