export type Data = Record<string, unknown>;

export type GetDataResponseType = {
  headers: string[];
  results: Data[];
};

export type ChartConfig = Record<string, { label: string; color: string }>;
