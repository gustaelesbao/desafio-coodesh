import { Button } from 'atomic/atm.button';
import { Loader } from 'atomic/atm.loader';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Desafio Coodesh' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Olá mundo!</h1>
        <Button kind='secondary' variation='light' loading>
          Botão de teste
        </Button>
        <Loader />
      </main>
    </>
  );
};

export default HomePage;
