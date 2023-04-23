import { PopulationGraph } from '@/components/elements/Graph/Graph';

import { graphTestData } from '@/utils/const';
import { Prefecture } from '@/utils/types';

type TopPageProps = {
  ListPrefectures: Prefecture[];
};

export const TopPage = ({ ListPrefectures }: TopPageProps) => {
  return (
    <div>
      <h1>Hello World</h1>
      <PopulationGraph
        data={graphTestData}
        ListDatakey={['東京都', '千葉県', '埼玉県', '神奈川県']}
      />
    </div>
  );
};
