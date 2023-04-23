export type Meta = {
  title?: string;
};

export type GraphData = {
  year: number;
  [prefecture: string]: number;
}[];

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

export type TextProps = {
  className?: string;
  children?: React.ReactNode;
};
