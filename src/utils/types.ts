export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationDataList = {
  boundaryYear: number;
  data: PopulationData[];
};

export type PopulationData = {
  label: string;
  data: YearData[];
};

export type YearData = {
  year: number;
  value: number;
  rate?: number;
};