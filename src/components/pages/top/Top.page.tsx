import { Checkbox } from '@/components/elements/Checkbox/Checkbox';
import { PopulationGraph } from '@/components/elements/Graph/Graph';

import { graphTestData } from '@/utils/const';
import { Prefecture } from '@/utils/types';

import styles from './Top.module.css';

type TopPageProps = {
  ListPrefectures: Prefecture[];
};

export const TopPage = ({ ListPrefectures }: TopPageProps) => {
  return (
    <div>
      <div>
        <h2>都道府県</h2>
        <div className={styles.prefecture_container}>
          {ListPrefectures.map((prefecture: Prefecture) => (
            <div key={prefecture.prefCode}>
              <Checkbox
                onChange={(e) => console.log(e)}
                prefecture={prefecture}
              />
            </div>
          ))}
        </div>
      </div>
      <PopulationGraph
        data={graphTestData}
        ListDatakey={['東京都', '千葉県', '埼玉県', '神奈川県']}
      />
    </div>
  );
};
