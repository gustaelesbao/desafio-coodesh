import { Spacing } from 'app/constants';
import { WordContext } from 'app/contexts/word.context';
import { WordDTO } from 'app/DTOs/word.DTO';
import { Flex } from 'atomic/atm.flex';
import { Loader } from 'atomic/atm.loader';
import { Space } from 'atomic/atm.space';
import { Text } from 'atomic/atm.typography';

import React, { useContext } from 'react';
import { WordListScrollAreaStyled, WordListWrapperStyled } from './word-list.component.style';
import { Word } from 'atomic/atm.word/word.component';

interface WordListProps {
  setDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any[];
  wordList: WordDTO[];
  error: any;
  size: number;
  setSize: (size: number | ((_size: number) => number)) => Promise<any[]>;
  isValidating: boolean;
}

export const WordList = ({ setDialogIsOpen, data, error, isValidating, setSize, size, wordList }: WordListProps) => {
  const { selectedWord, history, setHistory } = useContext(WordContext);
  const pageSize = 60;

  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < pageSize);
  const isRefreshing = isValidating && data && data.length === size;

  const handleScroll = (e) => {
    const el = e.target;

    if (Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight) {
      !isLoadingMore && setSize(size + 1);
    }
  };

  const handleClickWord = (word: string) => {
    if (!history) {
      setHistory([word]);
    }

    if (Array.isArray(history) && !history.find((historyWord) => historyWord === word)) {
      setHistory([...history, word]);
    }
  };

  return (
    <Flex flexDirection='column' height='100%'>
      <Text>
        Selected word:{' '}
        <Text htmlTag='span' fontWeight='SemiBold'>
          {selectedWord}
        </Text>
      </Text>

      <Space size={Spacing.Size2X} />

      {!isLoadingInitialData ? (
        <Flex.Item position='relative'>
          <WordListScrollAreaStyled onScroll={handleScroll}>
            <WordListWrapperStyled>
              {wordList?.map((data) => (
                <Word
                  onClick={() => handleClickWord(data?.attributes?.Word)}
                  word={data?.attributes?.Word}
                  key={data?.id}
                  setDialogIsOpen={setDialogIsOpen}
                />
              ))}
            </WordListWrapperStyled>

            {!isReachingEnd && (
              <Flex
                paddingBottom={Spacing.Size3X}
                paddingTop={Spacing.Size4X}
                alignItems='center'
                justifyContent='center'
              >
                <Loader />
              </Flex>
            )}

            {isEmpty && (
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
