import { Spacing, StaticColor } from 'app/constants';
import { Button } from 'atomic/atm.button';
import { Flex } from 'atomic/atm.flex';
import { PhIcon } from 'atomic/atm.phosphor-icons';
import { ScrollArea } from 'atomic/atm.scroll-area';
import { Space } from 'atomic/atm.space';
import { Text, Title } from 'atomic/atm.typography';
import { AudioPlayer } from 'atomic/mol.audio-player';
import { WordBox } from 'atomic/mol.word-box';
import React from 'react';
import { firstLetterToUpperCase } from 'utils/string';

import { DATA_MOCKED } from './DATA_MOCKED';

export const WordInfos: React.FC = () => {
  return (
    <Flex flex={1} flexDirection='column' position='relative'>
      <WordBox word={DATA_MOCKED[0].word} phonetic={DATA_MOCKED[0].phonetic} />

      <Space size={Spacing.Size3X} />

      <AudioPlayer src={DATA_MOCKED[0].phonetics[0].audio} />

      <Space size={Spacing.Size3X} />

      <Flex gap={Spacing.Size2X}>
        <Button kind='secondary' size='Small' expanded>
          <PhIcon.ArrowLeft />
          Previus
        </Button>
        <Button kind='secondary' size='Small' expanded>
          Next
          <PhIcon.ArrowRight />
        </Button>
      </Flex>

      <Space size={Spacing.Size2X} />

      <Title size='Large' fontWeight='Bold'>
        Meanings
      </Title>

      <Space size={Spacing.Size2X} />

      <ScrollArea type='hover'>
        <Flex.Item gap={Spacing.Size4X} flexDirection='column' position='relative'>
          {DATA_MOCKED[0].meanings.map((meaning) => (
            <Flex flexDirection='column' key={meaning.partOfSpeech} gap={Spacing.Size0_5X}>
              <Title size='Small' fontWeight='Bold'>
                {firstLetterToUpperCase(meaning.partOfSpeech)}
              </Title>

              <Title size='XSmall' textColor={StaticColor.Gray800} fontWeight='SemiBold'>
                Definition:{' '}
                <Text size='XSmall' fontWeight='Medium' display='inline'>
                  {firstLetterToUpperCase(meaning.definitions[0].definition)}
                </Text>
              </Title>

              <Title size='XSmall' textColor={StaticColor.Gray800} fontWeight='SemiBold'>
                Example:{' '}
                <Text size='XSmall' fontWeight='Medium' display='inline'>
                  {firstLetterToUpperCase(meaning.definitions[0].example)}
                </Text>
              </Title>
            </Flex>
          ))}
        </Flex.Item>
      </ScrollArea>
    </Flex>
  );
};
