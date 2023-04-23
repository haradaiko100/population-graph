import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { GraphData } from '@/utils/types';

import styles from './Graph.module.css';

type GraphProps = {
  data: GraphData;
  ListDatakey: string[];
};

export const PopulationGraph = ({ data, ListDatakey }: GraphProps) => {
  const colors = ListDatakey.map(
    () => '#' + Math.floor(Math.random() * 16777215).toString(16),
  );
  return (
    <div className={styles.container}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='year'
            label={{
              value: '年度',
              position: 'insideBottomRight',
              fontWeight: 'bold',
              offset: -20,
            }}
          />
          <YAxis
            tickCount={6}
            label={{
              value: '人口数',
              position: 'top',
              fontWeight: 'bold',
              offset: 20,
            }}
          />
          <Tooltip />
          <Legend align='left' />
          {ListDatakey.map((dataKey: string, index: number) => (
            <Line
              type='monotone'
              dataKey={dataKey}
              key={dataKey}
              stroke={colors[index]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
