import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';

import { TopPage } from '@/components/pages/top/Top.page';

import { fetchPrefectureList } from '@/api/query';
import { Prefecture } from '@/utils/types';

type HomePageProps = {
  ListPrefectures: Prefecture[];
};

const HomePage: NextPage<HomePageProps> = ({ ListPrefectures }) => {
  return <TopPage ListPrefectures={ListPrefectures} />;
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  const ListPrefectures = await fetchPrefectureList();

  return {
    props: {
      ListPrefectures: ListPrefectures,
    },
  };
};
