import { WordProvider } from 'app/contexts/word.context';
import { GlobalStyled } from 'app/reset';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <WordProvider>
      <GlobalStyled />
      <Component {...pageProps} />
    </WordProvider>
  );
};

export default App;
