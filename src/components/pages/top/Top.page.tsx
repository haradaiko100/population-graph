import { Prefecture } from '@/utils/types';

type TopPageProps = {
  ListPrefectures: Prefecture[];
};

export const TopPage = ({ ListPrefectures }: TopPageProps) => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
