import { useState } from 'react';

import { fetchAllPopulation } from '@/api/query';
import { PopulationTypes } from '@/utils/const';
import { GraphData, PopulationData, PopulationDataList } from '@/utils/types';

export const usePrefecture = () => {
  const [checkedListPrefectures, setCheckedListPrefectures] = useState<
    string[]
  >([]);

  const [populationCategory, setPopulationCategory] = useState<string>(
    PopulationTypes[0],
  );

  const [graphData, setGraphData] = useState<GraphData>([]);

  const [allPopulationData, setAllPopulationData] = useState<PopulationData[]>(
    [],
  );

  const onCheckboxesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = e.target;

    if (checked) {
      setCheckedListPrefectures([...checkedListPrefectures, name]);

      try {
        const populationDataList: PopulationDataList = await fetchAllPopulation(
          Number(value),
        );

        const populationData = populationDataList.data[0].data;

        const tmpGraphData = graphData.slice();

        // graphDataが空の時はyearも追加する
        if (tmpGraphData.length === 0) {
          populationData.forEach((data) => {
            tmpGraphData.push({ year: data.year, [name]: data.value });
          });

          setGraphData(tmpGraphData);
        } else {
          const newData = tmpGraphData.map((data, index) => ({
            ...data,
            [name]: populationData[index].value,
          }));

          setGraphData(newData);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // checkが外れた県は削除する
      setCheckedListPrefectures(
        checkedListPrefectures.filter((item, index) => item !== name),
      );

      setGraphData((prevData) => {
        const newData = prevData.map((data) => {
          const { year, [name]: _, ...rest } = data;
          return { year, ...rest };
        });
        return newData;
      });
    }
  };

  return {
    // prefecture
    checkedListPrefectures,
    setCheckedListPrefectures,

    // checkbox
    onCheckboxesChange,

    // graph
    graphData,
  };
};
