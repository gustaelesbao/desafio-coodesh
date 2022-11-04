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
import React, { useContext, useEffect, useState } from 'react';
import { firstLetterToUpperCase, slugfy } from 'utils/string';
import useSWR from 'swr';
import { WordInfosShimmer } from './word-infos.shimmer';

interface WordInfosProps {
  wordList: string[];
}

export const WordInfos = ({ wordList }: WordInfosProps) => {
  const { selectedWord, setSelectedWord } = useContext(WordContext);
  const slugfiedWord = encodeURI(selectedWord);

  const fetchWord = async () => {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${slugfiedWord}`);
    const wordInfos = await res.json();

    return wordInfos;
  };

  const { data } = useSWR(`https://api.dictionaryapi.dev/api/v2/entries/en/${slugfiedWord}`, fetchWord);

  const hasData = Array.isArray(data) && data.length > 0;

  const currentWordIndex = wordList.indexOf(selectedWord);

  const handleNext = () => {
    currentWordIndex + 1 < wordList.length && setSelectedWord(wordList[currentWordIndex + 1]);
  };

  const handlePrevius = () => {
    currentWordIndex > 0 && setSelectedWord(wordList[currentWordIndex - 1]);
  };

  return !data ? (
    <WordInfosShimmer />
  ) : (
    <Flex flex={1} flexDirection='column' position='relative'>
      <WordBox word={hasData ? data[0]?.word : 'Error'} phonetic={hasData ? data[0]?.phonetic : 'No word was found.'} />

      <Space size={Spacing.Size3X} />

      {hasData && data[0]?.phonetics[0]?.audio && (
        <>
          <AudioPlayer src={data[0]?.phonetics[0].audio} />
          <Space size={Spacing.Size3X} />
        </>
      )}

      <Flex gap={Spacing.Size2X}>
        <Button kind='secondary' size='Small' expanded onClick={handlePrevius} disabled={currentWordIndex === 0}>
          <PhIcon.ArrowLeft />
          Previus
        </Button>
        <Button
          kind='secondary'
          size='Small'
          expanded
          onClick={handleNext}
          disabled={currentWordIndex + 1 === wordList.length}
        >
          Next
          <PhIcon.ArrowRight />
        </Button>
      </Flex>

      {!Array.isArray(data) && (
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
            data[0]?.meanings.map((meaning, index) => (
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
