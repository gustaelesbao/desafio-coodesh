import { Radius, Spacing, StaticColor } from 'app/constants';
import { Box } from 'atomic/atm.box';
import { Flex } from 'atomic/atm.flex';
import { Col, Grid, Row } from 'atomic/atm.grid';
import { ScrollArea } from 'atomic/atm.scroll-area';
import { Space } from 'atomic/atm.space';
import { Tabs } from 'atomic/atm.tabs';
import { DesktopHeader, HeaderHeight } from 'atomic/org.desktop-header';
import { WordInfos } from 'components/word-infos.component';
import { WordsList } from 'components/words-list.component';
import Head from 'next/head';
import { useRouter } from 'next/router';

import type { GetServerSideProps, NextPage } from 'next';
import { WordContext } from 'app/contexts/word.context';
import { useContext, useEffect } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { DATA_MOCKED_WORD_LIST } from 'components/words-list.component/DATA_MOCKED';
import { isAValidWord } from 'utils/string';
import { Dialog } from 'atomic/org.dialog';
import { Breakpoint } from 'atomic/atm.breakpoint';
import useSWR from 'swr';
import { IconButton } from 'atomic/atm.icon-button';
import { PhIcon } from 'atomic/atm.phosphor-icons';

interface HomePageProps {
  currentUrl: ParsedUrlQuery;
}

const HomePage: NextPage<HomePageProps> = ({ currentUrl }) => {
  const { selectedWord, setSelectedWord, history, favorites, setHistory } = useContext(WordContext);
  const router = useRouter();

  const slugfiedWord = encodeURI(selectedWord);

  const fetchWord = async (apiURl: string) => {
    const res = await fetch(apiURl);
    const wordInfos = await res.json();

    return wordInfos;
  };

  const { data } = useSWR(`https://api.dictionaryapi.dev/api/v2/entries/en/${slugfiedWord}`, fetchWord);

  const validWordList = DATA_MOCKED_WORD_LIST.filter((word) => isAValidWord(word));

  const currentActiveTabByUrl = () => {
    if (currentUrl.activeTab && typeof currentUrl.activeTab === 'string') return currentUrl.activeTab;
    return 'word-list';
  };

  useEffect(() => {
    if (currentUrl.selectedWord && typeof currentUrl.selectedWord === 'string') {
      setSelectedWord(currentUrl.selectedWord);

      if (Array.isArray(favorites)) {
        setHistory([...history, currentUrl.selectedWord]);
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

                    <WordInfos wordData={data} wordList={validWordList} />

                    <Space size={Spacing.Size10X} />
                  </Flex.Item>
                </Col>
              </Breakpoint>

              <Col xs={12} md={8}>
                <Space size={Spacing.Size9X} />

                <Box flex={1} padding={Spacing.Size6X} borderType='All' display='flex' flexDirection='column'>
                  <Dialog>
                    <Tabs
                      defaultValue={currentActiveTabByUrl()}
                      onValueChange={(value) => router.push({ query: { ...router.query, activeTab: value } })}
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
                          <WordsList wordList={validWordList} />
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
                          <WordsList wordList={history} />
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
                          <WordsList wordList={favorites} />
                        </Box>
                      </Tabs.Content>
                    </Tabs>

                    <Breakpoint hideMd hideLg hideXl hideXxl>
                      <Dialog.Content>
                        <Grid height='100vh'>
                          <Row height='100vh'>
                            <Col height='100vh' xs={12}>
                              <Flex
                                marginLeft={'-' + Spacing.Size2X}
                                marginTop={Spacing.Size6X}
                                marginBottom={Spacing.Size4X}
                              >
                                <Dialog.Close asChild>
                                  <IconButton
                                    size='Nano'
                                    onClick={() => setSelectedWord('')}
                                    kind='tertiary'
                                    variation='light'
                                  >
                                    <PhIcon.X weight='bold' />
                                  </IconButton>
                                </Dialog.Close>
                              </Flex>

                              <WordInfos wordData={data} wordList={validWordList} />
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

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (ctx) => {
  const url = ctx.query;

  return { props: { currentUrl: url } };
};

export default HomePage;
