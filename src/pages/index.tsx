import { Radius, Spacing, StaticColor } from 'app/constants';
import { Box } from 'atomic/atm.box';
import { Flex } from 'atomic/atm.flex';
import { Col, Grid, Row } from 'atomic/atm.grid';
import { ScrollArea } from 'atomic/atm.scroll-area';
import { Space } from 'atomic/atm.space';
import { Tabs } from 'atomic/atm.tabs';
import { DesktopHeader, HeaderHeight } from 'atomic/org.desktop-header';
import { WordInfos } from 'components/word-infos.component';
import Head from 'next/head';
import { useRouter } from 'next/router';

import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { WordContext } from 'app/contexts/word.context';
import { useContext, useEffect, useState } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { Dialog } from 'atomic/org.dialog';
import { Breakpoint } from 'atomic/atm.breakpoint';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { IconButton } from 'atomic/atm.icon-button';
import { PhIcon } from 'atomic/atm.phosphor-icons';
import { HistoryWordList } from 'components/history-word-list.component';
import { WordList } from 'components/word-list.component';
import { FavoritesWordList } from 'components/favorites-word-list.component';
import { WordDTO } from 'app/DTOs/word.DTO';
import { fetcher } from 'utils/fetcher';
import { currentActiveTabByUrl } from 'utils/current-active-tab-by-url';

interface HomePageProps {
  currentUrl: ParsedUrlQuery;
}

const HomePage: NextPage<HomePageProps> = ({ currentUrl }) => {
  const { selectedWord, setSelectedWord, history, setHistory } = useContext(WordContext);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const activeTabByUrl = currentActiveTabByUrl(currentUrl);
  const router = useRouter();
  const pageSize = 60;

  const { data: wordData } = useSWR(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURI(selectedWord)}`,
    fetcher
  );

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      `https://coodesh-challenge-back.herokuapp.com/api/words?fields[0]=word&pagination[pageSize]=${pageSize}&pagination[page]=${
        index + 1
      }`,
    fetcher
  );

  const wordList: WordDTO[] = data ? [].concat(...data.map((d1) => d1.data)) : [];

  useEffect(() => {
    if (currentUrl['selected-word'] && typeof currentUrl['selected-word'] === 'string') {
      setSelectedWord(currentUrl['selected-word']);

      if (Array.isArray(history)) {
        setHistory([...history, currentUrl['selected-word']]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollArea type='hover' height='100vh'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Desafio Coodesh' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Flex flexDirection='column' htmlTag='main' minHeight='100vh' maxHeight='100vh'>
        <DesktopHeader />
        <Flex.Item>
          <Grid>
            <Row flex={1}>
              <Breakpoint hideXs hideSm>
                <Col xs={12} md={4}>
                  <Flex.Item
                    flexDirection='column'
                    minHeight={`calc(100vh - ${HeaderHeight})`}
                    maxHeight={`calc(100vh - ${HeaderHeight})`}
                  >
                    <Space size={Spacing.Size9X} />

                    <WordInfos wordList={wordList} wordData={wordData} />

                    <Space size={Spacing.Size10X} />
                  </Flex.Item>
                </Col>
              </Breakpoint>

              <Col xs={12} md={8}>
                <Space size={Spacing.Size9X} />

                <Box flex={1} padding={Spacing.Size6X} borderType='All' display='flex' flexDirection='column'>
                  <Dialog open={dialogIsOpen}>
                    <Tabs
                      defaultValue={activeTabByUrl}
                      onValueChange={(value) => router.push({ query: { ...router.query, 'active-tab': value } })}
                    >
                      <Tabs.List>
                        <Tabs.Trigger value='word-list'>Word list</Tabs.Trigger>
                        <Tabs.Trigger value='history'>History</Tabs.Trigger>
                        <Tabs.Trigger value='favorites'>Favorites</Tabs.Trigger>
                      </Tabs.List>

                      <Space size={Spacing.Size3X} />

                      <Tabs.Content value='word-list'>
                        <Box
                          padding={Spacing.Size1X}
                          backgroundColor={StaticColor.Gray100}
                          borderType='All'
                          borderRadius={Radius.Small}
                          position='relative'
                          height='100%'
                        >
                          <WordList
                            data={data}
                            error={error}
                            isValidating={isValidating}
                            setSize={setSize}
                            size={size}
                            wordList={wordList}
                            setDialogIsOpen={setDialogIsOpen}
                          />
                        </Box>
                      </Tabs.Content>
                      <Tabs.Content value='history'>
                        <Box
                          padding={Spacing.Size1X}
                          backgroundColor={StaticColor.Gray100}
                          borderType='All'
                          borderRadius={Radius.Small}
                          position='relative'
                          height='100%'
                        >
                          <HistoryWordList setDialogIsOpen={setDialogIsOpen} />
                        </Box>
                      </Tabs.Content>
                      <Tabs.Content value='favorites'>
                        <Box
                          padding={Spacing.Size1X}
                          backgroundColor={StaticColor.Gray100}
                          borderType='All'
                          borderRadius={Radius.Small}
                          position='relative'
                          height='100%'
                        >
                          <FavoritesWordList setDialogIsOpen={setDialogIsOpen} />
                        </Box>
                      </Tabs.Content>
                    </Tabs>

                    <Breakpoint hideMd hideLg hideXl hideXxl>
                      <Dialog.Content onBlurCapture={(e) => e.preventDefault()}>
                        <Grid height='100vh'>
                          <Row height='100vh'>
                            <Col height='100vh' xs={12}>
                              <Flex
                                marginLeft={'-' + Spacing.Size2X}
                                marginTop={Spacing.Size6X}
                                marginBottom={Spacing.Size4X}
                              >
                                <IconButton
                                  onClick={() => setDialogIsOpen(false)}
                                  size='Nano'
                                  kind='tertiary'
                                  variation='light'
                                >
                                  <PhIcon.X weight='bold' />
                                </IconButton>
                              </Flex>

                              <WordInfos wordList={wordList} wordData={wordData} />
                            </Col>
                          </Row>
                        </Grid>
                      </Dialog.Content>
                    </Breakpoint>
                  </Dialog>
                </Box>

                <Space size={Spacing.Size10X} />
              </Col>
            </Row>
          </Grid>
        </Flex.Item>
      </Flex>
    </ScrollArea>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = ctx.query;

  return { props: { currentUrl: url } };
};

export default HomePage;
