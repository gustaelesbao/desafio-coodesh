import { GlobalStyled } from 'app/reset';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  );
};

export default App;
