import { Spacing } from 'app/constants';
import { WordContext } from 'app/contexts/word.context';
import { Flex } from 'atomic/atm.flex';
import { Loader } from 'atomic/atm.loader';
import { Space } from 'atomic/atm.space';
import { Text } from 'atomic/atm.typography';
import { Word } from 'atomic/atm.word/word.component';
import {
  WordListScrollAreaStyled,
  WordListWrapperStyled,
} from 'components/word-list.component/word-list.component.style';
import React, { useContext, useState } from 'react';

interface FavoritesWordListProps {
  setDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FavoritesWordList = ({ setDialogIsOpen }: FavoritesWordListProps) => {
  const { selectedWord, setSelectedWord, favorites } = useContext(WordContext);
  const [scrollCount, setScrollCount] = useState(1);
  const pageSize = 60;

  const handleScroll = (e) => {
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

      {favorites ? (
        <Flex.Item position='relative'>
          <WordListScrollAreaStyled onScroll={handleScroll}>
            <WordListWrapperStyled>
              {favorites.map((favorite, index) => (
                <Word setDialogIsOpen={setDialogIsOpen} word={favorite} key={index} />
              ))}
            </WordListWrapperStyled>

            {favorites.length > pageSize * scrollCount && (
              <Flex
                paddingBottom={Spacing.Size3X}
                paddingTop={Spacing.Size4X}
                alignItems='center'
                justifyContent='center'
              >
                <Loader />
              </Flex>
            )}

            {!favorites.length && (
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
