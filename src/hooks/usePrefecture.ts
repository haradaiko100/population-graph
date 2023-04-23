import { useEffect, useState } from 'react';

import { findPopulationCategoryIndex } from '@/libs/common';

import { fetchAllPopulation } from '@/api/query';
import { PopulationTypes } from '@/utils/const';
import {
  GraphData,
  PopulationData,
  PopulationDataList,
  YearData,
} from '@/utils/types';

type AllPopulationDataProps = {
  [prefecture: string]: PopulationData[];
};

export const usePrefecture = () => {
  const [checkedListPrefectures, setCheckedListPrefectures] = useState<
    string[]
  >([]);

  const [populationCategory, setPopulationCategory] = useState<string>(
    PopulationTypes[0],
  );

  const [graphData, setGraphData] = useState<GraphData>([]);

  const [allPopulationData, setAllPopulationData] =
    useState<AllPopulationDataProps>({});

  useEffect(() => {
    const categoryIndex = findPopulationCategoryIndex(populationCategory);

    if (Object.keys(allPopulationData).length > 0) {
      const newGraphData = graphData.map((data, index) => {
        const newData = { ...data };
        Object.keys(data).forEach((key) => {
          if (key in allPopulationData) {
            newData[key] =
              allPopulationData[key][categoryIndex].data[index].value;
          }
        });
        return newData;
      });
      setGraphData(newGraphData);
    }
  }, [populationCategory]);

  const onRadioButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPopulationCategory(e.target.value);
  };

  const onCheckboxesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = e.target;

    if (checked) {
      setCheckedListPrefectures([...checkedListPrefectures, name]);

      try {
        const populationDataList: PopulationDataList = await fetchAllPopulation(
          Number(value),
        );

        setAllPopulationData({
          ...allPopulationData,
          [name]: populationDataList.data,
        });

        const index = findPopulationCategoryIndex(populationCategory);
        const populationData: YearData[] = populationDataList.data[index].data;

        const tmpGraphData = [...graphData];
        // graphDataが空の時はyearも追加する
        if (graphData.length === 0) {
          populationData.forEach((data) => {
            tmpGraphData.push({ year: data.year, [name]: data.value });
          });

          setGraphData(tmpGraphData);
        } else {
          const newData = graphData.map((data, index) => ({
            ...data,
            [name]: populationData[index].value,
          }));

          setGraphData(newData);
        }
      } catch (error) {
        return;
      }
    } else {
      // checkが外れた県は削除する
      setCheckedListPrefectures(
        checkedListPrefectures.filter((item, index) => item !== name),
      );

      const tmpAllPopulationData = { ...allPopulationData };
      delete tmpAllPopulationData[name];
      setAllPopulationData(tmpAllPopulationData);

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

    // radio button
    populationCategory,
    onRadioButtonChange,

    // graph
    graphData,
  };
};
