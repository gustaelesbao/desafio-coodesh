import { Spacing } from 'app/constants';
import { WordContext } from 'app/contexts/word.context';
import { Flex } from 'atomic/atm.flex';
import { IconButton } from 'atomic/atm.icon-button';
import { PhIcon } from 'atomic/atm.phosphor-icons';
import { Title } from 'atomic/atm.typography';
import React, { useContext } from 'react';
import { WordBoxWrapperStyled } from './word-box.component.style';

interface WordBoxProps {
  word?: string;
  phonetic?: string;
}

export const WordBox = ({ word, phonetic }: WordBoxProps) => {
  const { favorites, setFavorites, selectedWord } = useContext(WordContext);

  const handleClickFavorite = () => {
    if (!favorites) {
      setFavorites([selectedWord]);
    }

    if (Array.isArray(favorites)) {
      if (!favorites.find((favorite) => favorite === selectedWord)) {
        setFavorites([...favorites, selectedWord]);
      } else {
        setFavorites(favorites.filter((favorite) => favorite !== selectedWord));
      }
    }
  };

  return (
    <WordBoxWrapperStyled>
      <Flex position='absolute' top={Spacing.Size1X} right={Spacing.Size1X} width='fit-content'>
        <IconButton variation='light' onClick={handleClickFavorite}>
          {!Array.isArray(favorites) || !favorites.find((favorite) => favorite === selectedWord) ? (
            <PhIcon.Star weight='bold' />
          ) : (
            <PhIcon.Star weight='fill' />
          )}
        </IconButton>
      </Flex>

      <Title fontWeight='Medium' size='Large' textAlign='center'>
        {word}
      </Title>

      {phonetic && (
        <Title fontWeight='Medium' size='Large' textAlign='center'>
          {phonetic}
        </Title>
      )}
    </WordBoxWrapperStyled>
  );
};
