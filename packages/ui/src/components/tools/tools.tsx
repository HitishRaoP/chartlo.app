'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@chartloapp/state';

export function Tools() {
  const url = useSelector((state: RootState) => state.chart.url);

  if (url) {
    return <div className="h-full w-full"></div>;
  } else {
    return <div className="text-center pt-2">No Data</div>;
  }
}
