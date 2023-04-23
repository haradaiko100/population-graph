import { findPopulationCategoryIndex } from '@/libs/common';

describe('findPopulationCategoryIndex function', () => {
  it('should return 0 when given "総人口"', () => {
    const result = findPopulationCategoryIndex('総人口');
    expect(result).toBe(0);
  });

  it('should return 1 when given "年少人口"', () => {
    const result = findPopulationCategoryIndex('年少人口');
    expect(result).toBe(1);
  });

  it('should return 2 when given "生産年齢人口"', () => {
    const result = findPopulationCategoryIndex('生産年齢人口');
    expect(result).toBe(2);
  });

  it('should return 3 when given "老年人口"', () => {
    const result = findPopulationCategoryIndex('老年人口');
    expect(result).toBe(3);
  });

  it('should return 0 when given an invalid argument', () => {
    const result = findPopulationCategoryIndex('invalid');
    expect(result).toBe(0);
  });
});
