import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ChartConfig, Data } from '@chartloapp/csv2chart';

type initialStateType = {
  fields: string[];
  chartType: string;
  data: Data[];
  chartConfig: ChartConfig;
  url: string;
};

const initialState: initialStateType = {
  fields: [],
  chartType: 'bar',
  data: [],
  chartConfig: {} as ChartConfig,
  url: '',
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setFields: (
      state,
      action: PayloadAction<{ key: string; isChecked: boolean | string }>,
    ) => {
      const { key, isChecked } = action.payload;
      if (isChecked) {
        if (!state.fields.includes(key)) {
          state.fields.push(key);
        }
      } else {
        state.fields = state.fields.filter((field) => field !== key);
        delete state.chartConfig[key];
      }
    },
    setChartType: (state, action: PayloadAction<string>) => {
      state.chartType = action.payload;
    },
    setData: (state, action: PayloadAction<Data[]>) => {
      state.data = action.payload;
    },
    setChartConfig: (state, action: PayloadAction<ChartConfig>) => {
      state.chartConfig = {
        ...state.chartConfig,
        ...action.payload,
      };
    },
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const { setFields, setChartType, setData, setChartConfig, setUrl } =
  chartSlice.actions;
export default chartSlice.reducer;
