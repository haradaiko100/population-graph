import { Checkbox } from '@/components/elements/Checkbox/Checkbox';
import { PopulationGraph } from '@/components/elements/Graph/Graph';

import { usePrefecture } from '@/hooks/usePrefecture';
import { Prefecture } from '@/utils/types';

import styles from './Top.module.css';


type TopPageProps = {
  ListPrefectures: Prefecture[];
};

export const TopPage = ({ ListPrefectures }: TopPageProps) => {
  const { checkedListPrefectures, onCheckboxesChange, graphData } =
    usePrefecture();
  return (
    <div>
      <div>
        <h2>都道府県</h2>
        <div className={styles.prefecture_container}>
          {ListPrefectures.map((prefecture: Prefecture) => (
            <div key={prefecture.prefCode}>
              <Checkbox
                onChange={(e) => onCheckboxesChange(e)}
                prefecture={prefecture}
              />
            </div>
          ))}
        </div>
      </div>
      <PopulationGraph data={graphData} ListDatakey={checkedListPrefectures} />
    </div>
  );
};
