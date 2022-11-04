import { Spacing } from 'app/constants';
import { WordContext } from 'app/contexts/word.context';
import { Flex } from 'atomic/atm.flex';
import { Input } from 'atomic/atm.input';
import { Loader } from 'atomic/atm.loader';
import { PhIcon } from 'atomic/atm.phosphor-icons';
import { Space } from 'atomic/atm.space';
import { Text } from 'atomic/atm.typography';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { WordListScrollAreaStyled, WordsListWrapperStyled, WordStyled } from './words-list.component.style';

interface WordsListProps {
  wordList: string[];
}

export const WordsList = ({ wordList }: WordsListProps) => {
  const router = useRouter();

  const { selectedWord, setSelectedWord, history, setHistory } = useContext(WordContext);

  const [scrollCount, setScrollCount] = useState(1);
  const [searchText, setSearchText] = useState('');

  const handleScroll = (e) => {
    const el = e.target;

    if (Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight) {
      setScrollCount((scrollCount) => scrollCount + 1);
    }
  };

  const handleClickWord = (word: string) => {
    setSelectedWord(word);
    router.push({ query: { ...router.query, selectedWord: word } });

    if (!history.find((historyWord) => historyWord === word)) {
      setHistory([...history, word]);
    }
  };

  return (
    <Flex flexDirection='column' height='100%'>
      <Input
        placeholder='Search word'
        type='text'
        name='search-bar'
        icon={<PhIcon.MagnifyingGlass weight='bold' />}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <Space size={Spacing.Size2X} />

      <Text marginLeft={Spacing.Size2X}>
        Selected word:{' '}
        <Text htmlTag='span' fontWeight='SemiBold'>
          {selectedWord}
        </Text>
      </Text>

      <Space size={Spacing.Size2X} />

      {Array.isArray(wordList) ? (
        <Flex.Item position='relative'>
          <WordListScrollAreaStyled onScroll={handleScroll}>
            <WordsListWrapperStyled>
              {wordList
                .filter((word) => word.includes(searchText))
                .map(
                  (word, index) =>
                    index < scrollCount * 60 && (
                      <WordStyled selected={word === selectedWord} key={index} onClick={() => handleClickWord(word)}>
                        {word}
                      </WordStyled>
                    )
                )}
            </WordsListWrapperStyled>

            {wordList.filter((word) => word.includes(searchText)).length > scrollCount * 60 && (
              <Flex
                paddingBottom={Spacing.Size3X}
                paddingTop={Spacing.Size4X}
                alignItems='center'
                justifyContent='center'
              >
                <Loader />
              </Flex>
            )}

            {wordList.length === 0 && (
              <Text textAlign='center' paddingTopBottom={Spacing.Size4X}>
                No word was found.
              </Text>
            )}
          </WordListScrollAreaStyled>
        </Flex.Item>
      ) : (
        <Flex paddingBottom={Spacing.Size3X} paddingTop={Spacing.Size4X} alignItems='center' justifyContent='center'>
          <Loader />
        </Flex>
      )}
    </Flex>
  );
};
