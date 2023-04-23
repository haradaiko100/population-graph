export const findPopulationCategoryIndex = (populationCategory: string) => {
  let index: number;
  switch (populationCategory) {
    case '総人口':
      index = 0;
      break;
    case '年少人口':
      index = 1;
      break;
    case '生産年齢人口':
      index = 2;
      break;
    case '老年人口':
      index = 3;
      break;
    default:
      index = 0;
  }

  return index;
};
