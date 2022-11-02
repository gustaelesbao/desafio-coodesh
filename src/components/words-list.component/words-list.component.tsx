import { Spacing } from 'app/constants';
import { Flex } from 'atomic/atm.flex';
import { Loader } from 'atomic/atm.loader';
import React from 'react';
import { WordsListWrapperStyled, WordStyled } from './words-list.component.style';

interface WordsList {
  data: string[];
}

export const WordsList = ({ data }: WordsList) => {
  return (
    <>
      <WordsListWrapperStyled>
        {data.map((word, index) => index < 60 && <WordStyled key={index}>{word}</WordStyled>)}
      </WordsListWrapperStyled>
      <Flex paddingBottom={Spacing.Size3X} paddingTop={Spacing.Size4X} alignItems='center' justifyContent='center'>
        <Loader />
      </Flex>
    </>
  );
};
