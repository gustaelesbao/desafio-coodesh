import { Spacing } from 'app/constants';
import { Flex } from 'atomic/atm.flex';
import { Col, Grid, Row } from 'atomic/atm.grid';
import { Space } from 'atomic/atm.space';
import { AudioPlayer } from 'atomic/mol.audio-player';
import { DesktopHeader } from 'atomic/org.desktop-header';
import { WordInfos } from 'components/word-infos.component';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Desafio Coodesh' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Flex flexDirection='column' htmlTag='main' minHeight='100vh' maxHeight='100vh'>
        <DesktopHeader />
        <Flex.Item>
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                <Space size={Spacing.Size9X} />

                <WordInfos />

                <Space size={Spacing.Size3X} />

                <AudioPlayer src='https://ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3' />

                <Space size={Spacing.Size10X} />
              </Col>

              <Col xs={12} md={8}>
                <Space size={Spacing.Size9X} />
                Texto
                <Space size={Spacing.Size10X} />
              </Col>
            </Row>
          </Grid>
        </Flex.Item>
      </Flex>
    </>
  );
};

export default HomePage;
