import { Page } from '@/app';
import { GeneralLayout } from '@/layout';
import { ReactNode } from 'react';
import useTranslation from 'next-translate/useTranslation';

const Home: Page<IHomePageProps> = () => {
  const { t } = useTranslation();
  return (
   <div>
    {t('common:title')}
   </div>
  );
};


Home.getLayout = function getLayout(page: ReactNode) {
  return <GeneralLayout>{page}</GeneralLayout>;
};
export default Home;

export interface IHomePageProps {}
