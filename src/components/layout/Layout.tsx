import Head from 'next/head';

import { Meta } from '@/utils/types';

import { Header } from './Header/Header';

type LayoutProps = {
  meta: Meta;
  children?: React.ReactNode;
};

export const MainLayout = ({ meta, children }: LayoutProps) => {
  return (
    <div>
      <HeadMeta meta={meta} />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export const HeadMeta = ({ meta }: { meta: Meta }) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      />
      {/* noindexにするとGoogleの検索結果に表示されなくなる */}
      <meta name='robots' content='noindex' />
    </Head>
  );
};
