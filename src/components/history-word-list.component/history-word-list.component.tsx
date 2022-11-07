import { Spacing } from 'app/constants';
import { WordContext } from 'app/contexts/word.context';
import { Flex } from 'atomic/atm.flex';
import { Loader } from 'atomic/atm.loader';
import { Space } from 'atomic/atm.space';
import { Text } from 'atomic/atm.typography';
import { Word } from 'atomic/atm.word/word.component';
import React, { useContext, useState } from 'react';
import {
  WordListScrollAreaStyled,
  WordListWrapperStyled,
} from 'components/word-list.component/word-list.component.style';

interface HistoryWordListProps {
  setDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HistoryWordList = ({ setDialogIsOpen }: HistoryWordListProps) => {
  const { selectedWord, history } = useContext(WordContext);
  const [scrollCount, setScrollCount] = useState(1);
  const pageSize = 60;

  const handleScroll = (e: any) => {
    const el = e.target;

    if (Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight) {
      setScrollCount((scrollCount) => scrollCount + 1);
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

      {history ? (
        <Flex.Item position='relative'>
          <WordListScrollAreaStyled onScroll={handleScroll}>
            <WordListWrapperStyled>
              {history.map((historyWord, index) => (
                <Word setDialogIsOpen={setDialogIsOpen} word={historyWord} key={index} />
              ))}
            </WordListWrapperStyled>

            {history.length > pageSize * scrollCount && (
              <Flex
                paddingBottom={Spacing.Size3X}
                paddingTop={Spacing.Size4X}
                alignItems='center'
                justifyContent='center'
              >
                <Loader />
              </Flex>
            )}

            {!history.length && (
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
