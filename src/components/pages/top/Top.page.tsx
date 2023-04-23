import { Checkbox } from '@/components/elements/Checkbox/Checkbox';
import { PopulationGraph } from '@/components/elements/Graph/Graph';
import { RadioButton } from '@/components/elements/Radiobutton/Radiobutton';

import { usePrefecture } from '@/hooks/usePrefecture';
import { PopulationTypes } from '@/utils/const';
import { Prefecture } from '@/utils/types';

import styles from './Top.module.css';

type TopPageProps = {
  ListPrefectures: Prefecture[];
};

export const TopPage = ({ ListPrefectures }: TopPageProps) => {
  const {
    checkedListPrefectures,
    onCheckboxesChange,
    graphData,
    populationCategory,
    onRadioButtonChange,
  } = usePrefecture();
  return (
    <div className={styles.container}>
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
        <h2>人口種類別</h2>
        <div className={styles.population_category_container}>
          {PopulationTypes.map((populationType) => (
            <div key={populationType}>
              <RadioButton
                checked={populationType === populationCategory}
                populationCategoryName={populationType}
                onChange={(e) => onRadioButtonChange(e)}
              />
            </div>
          ))}
        </div>
      </div>
      <PopulationGraph data={graphData} ListDatakey={checkedListPrefectures} />
    </div>
  );
};
