import axiosClient from '../libs/axios';

export const fetchPrefectureList = async () => {
  try {
    const response = await axiosClient.get('/api/v1/prefectures');
    const prefectureData = response.data.result;

    return prefectureData;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch prefecture data');
  }
};

export const fetchAllPopulation = async (prefCode: number) => {
  const params = {
    prefCode: prefCode,
    cityCode: '-',
  };

  try {
    const response = await axiosClient.get(
      'api/v1/population/composition/perYear',
      { params },
    );
    const population = response.data.result;

    return population;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch population data');
  }
};
