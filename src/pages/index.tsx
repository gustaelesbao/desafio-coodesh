import { Radius, Spacing, StaticColor } from 'app/constants';
import { Box } from 'atomic/atm.box';
import { Flex } from 'atomic/atm.flex';
import { Col, Grid, Row } from 'atomic/atm.grid';
import { ScrollArea } from 'atomic/atm.scroll-area';
import { Space } from 'atomic/atm.space';
import { Tabs } from 'atomic/atm.tabs';
import { Text } from 'atomic/atm.typography';
import { DesktopHeader, HeaderHeight } from 'atomic/org.desktop-header';
import { WordInfos } from 'components/word-infos.component';
import { WordsList } from 'components/words-list.component';
import { DATA_MOCKED_WORD_LIST } from 'components/words-list.component/DATA_MOCKED';
import Head from 'next/head';
import { useRouter } from 'next/router';

import type { GetServerSideProps, NextPage } from 'next';

type HomePageProps = { activeTab: string };

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (ctx) => {
  const activeTab = ctx.req.url.split('?')[1] || '';

  if (activeTab.includes('history')) {
    return { props: { activeTab: 'history' } };
  }

  if (activeTab.includes('favorites')) {
    return { props: { activeTab: 'favorites' } };
  }

  return { props: { activeTab: 'word-list' } };
};

const HomePage: NextPage<HomePageProps> = ({ activeTab }) => {
  const router = useRouter();

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
            <Row>
              <Col xs={12} md={4}>
                <Flex.Item
                  flexDirection='column'
                  minHeight={`calc(100vh - ${HeaderHeight})`}
                  maxHeight={`calc(100vh - ${HeaderHeight})`}
                >
                  <Space size={Spacing.Size9X} />

                  <WordInfos />

                  <Space size={Spacing.Size10X} />
                </Flex.Item>
              </Col>

              <Col xs={12} md={8}>
                <Space size={Spacing.Size9X} />

                <Box flex={1} padding={Spacing.Size6X} borderType='All' display='flex' flexDirection='column'>
                  <Tabs defaultValue={activeTab} onValueChange={(value) => router.push('?active-tab=' + value)}>
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
                        <ScrollArea height='100%'>
                          <WordsList data={DATA_MOCKED_WORD_LIST} />
                        </ScrollArea>
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
                        <Text textAlign='center' paddingTopBottom={Spacing.Size4X}>
                          No word was found.
                        </Text>
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
                        <Text textAlign='center' paddingTopBottom={Spacing.Size4X}>
                          No word was found.
                        </Text>
                      </Box>
                    </Tabs.Content>
                  </Tabs>
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

export default HomePage;
