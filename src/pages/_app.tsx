import { AppContext } from 'next/app';
import { AppWrapper, ExtendedAppProps } from '@/app';

function App(props: ExtendedAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppWrapper>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </AppWrapper>
  );
}

App.getInitialProps = async ({ Component, ctx: context }: AppContext) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(context);
  }

  return {
    pageProps
  };
};

export default App
