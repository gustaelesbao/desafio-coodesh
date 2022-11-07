/* eslint-disable react/no-unescaped-entities */
import { Spacing, StaticColor } from 'app/constants';
import { WordContext } from 'app/contexts/word.context';
import { Button } from 'atomic/atm.button';
import { Flex } from 'atomic/atm.flex';
import { PhIcon } from 'atomic/atm.phosphor-icons';
import { ScrollArea } from 'atomic/atm.scroll-area';
import { Space } from 'atomic/atm.space';
import { Text, Title } from 'atomic/atm.typography';
import { AudioPlayer } from 'atomic/mol.audio-player';
import { WordBox } from 'atomic/mol.word-box';
import React, { useContext, useEffect } from 'react';
import { firstLetterToUpperCase } from 'utils/string';
import { WordInfosShimmer } from './word-infos.shimmer';
import { WordData } from 'app/DTOs/word-data.DTO';
import { WordDTO } from 'app/DTOs/word.DTO';

interface WordInfosProps {
  wordData: WordData[];
  wordList: WordDTO[];
}

export const WordInfos = ({ wordData, wordList }: WordInfosProps) => {
  const { selectedWord, setSelectedWord } = useContext(WordContext);

  const hasData = Array.isArray(wordData) && wordData.length > 0;
  const currentWordItem = wordList?.find((word) => word.attributes.Word === selectedWord);

  const currentWordIndex = wordList?.findIndex((wordItem, index) => {
    if (wordItem.id === currentWordItem.id) return index + 1;
  });

  const handleNext = () => {
    currentWordIndex < wordList.length - 1 && setSelectedWord(wordList[currentWordIndex + 1].attributes.Word);
  };

  const handlePrevius = () => {
    currentWordIndex > 0 && setSelectedWord(wordList[currentWordIndex - 1].attributes.Word);
  };

  return !wordData ? (
    <WordInfosShimmer />
  ) : (
    <Flex flex={1} flexDirection='column' position='relative'>
      <WordBox
        word={hasData ? wordData[0]?.word : 'Error'}
        phonetic={hasData ? wordData[0]?.phonetic : 'No word was found.'}
      />

      <Space size={Spacing.Size3X} />

      {hasData && wordData[0]?.phonetics[0]?.audio && (
        <>
          <AudioPlayer src={wordData[0]?.phonetics[0].audio} />
          <Space size={Spacing.Size3X} />
        </>
      )}

      {wordList.length > 0 && (
        <Flex gap={Spacing.Size2X}>
          <Button kind='secondary' size='Small' expanded onClick={handlePrevius} disabled={currentWordIndex <= 0}>
            <PhIcon.ArrowLeft />
            Previus
          </Button>
          <Button
            kind='secondary'
            size='Small'
            expanded
            onClick={handleNext}
            disabled={currentWordIndex === wordList.length - 1}
          >
            Next
            <PhIcon.ArrowRight />
          </Button>
        </Flex>
      )}

      {!Array.isArray(wordData) && (
        <>
          <Space size={Spacing.Size3X} />
          <Title size='Small' fontWeight='Bold'>
            No Definitions Found
          </Title>
          <Space size={Spacing.Size1X} />
          <Text>Sorry pal, we couldn't find definitions for the word you were looking for.</Text>
        </>
      )}

      {hasData && (
        <>
          <Space size={Spacing.Size2X} />

          <Title size='Large' fontWeight='Bold'>
            Meanings
          </Title>

          <Space size={Spacing.Size2X} />
        </>
      )}

      <ScrollArea type='hover'>
        <Flex.Item gap={Spacing.Size4X} flexDirection='column' position='relative'>
          {hasData &&
            wordData[0]?.meanings.map((meaning, index) => (
              <Flex flexDirection='column' key={meaning.partOfSpeech + index} gap={Spacing.Size0_5X}>
                <Title size='Small' fontWeight='Bold'>
                  {firstLetterToUpperCase(meaning.partOfSpeech)}
                </Title>

                {meaning.definitions[0].definition && (
                  <Title size='XSmall' textColor={StaticColor.Gray800} fontWeight='SemiBold'>
                    Definition:{' '}
                    <Text size='XSmall' fontWeight='Medium' display='inline'>
                      {firstLetterToUpperCase(meaning.definitions[0].definition)}
                    </Text>
                  </Title>
                )}

                {meaning.definitions[0].example && (
                  <Title size='XSmall' textColor={StaticColor.Gray800} fontWeight='SemiBold'>
                    Example:{' '}
                    <Text size='XSmall' fontWeight='Medium' display='inline'>
                      {firstLetterToUpperCase(meaning.definitions[0].example)}
                    </Text>
                  </Title>
                )}
              </Flex>
            ))}
        </Flex.Item>
      </ScrollArea>
    </Flex>
  );
};
