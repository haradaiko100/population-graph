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
  return (
    <div className={styles.container}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='year' />
          <YAxis />
          <Tooltip />
          <Legend />
          {ListDatakey.map((dataKey: string) => (
            <Line dataKey={dataKey} key={dataKey} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
