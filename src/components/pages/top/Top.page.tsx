import { Checkbox } from '@/components/elements/Checkbox/Checkbox';
import { PopulationGraph } from '@/components/elements/Graph/Graph';
import { RadioButton } from '@/components/elements/Radiobutton/Radiobutton';
import { PrimaryHeading } from '@/components/elements/Text/Text';
import { MainLayout } from '@/components/layout/Layout';

import { usePrefecture } from '@/hooks/usePrefecture';
import { META, PopulationTypes } from '@/utils/const';
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
    <MainLayout meta={META.top}>
      <div className={styles.container}>
        <div className={styles.population_prefecture_container}>
          <PrimaryHeading>都道府県</PrimaryHeading>
          <div className={styles.prefecture_container}>
            {ListPrefectures.map((prefecture: Prefecture) => (
              <Checkbox
                key={prefecture.prefCode}
                onChange={(e) => onCheckboxesChange(e)}
                prefecture={prefecture}
              />
            ))}
          </div>
          <PrimaryHeading>人口種類別</PrimaryHeading>
          <div className={styles.population_category_container}>
            {PopulationTypes.map((populationType) => (
              <RadioButton
                key={populationType}
                checked={populationType === populationCategory}
                populationCategoryName={populationType}
                onChange={(e) => onRadioButtonChange(e)}
              />
            ))}
          </div>
        </div>
        <PopulationGraph
          data={graphData}
          ListDatakey={checkedListPrefectures}
        />
      </div>
    </MainLayout>
  );
};
