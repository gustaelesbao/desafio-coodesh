import { Button } from 'atomic/atm.button';
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
        <Button kind='secondary' variation='light'>
          Botão de teste
        </Button>
      </main>
    </>
  );
};

export default HomePage;
