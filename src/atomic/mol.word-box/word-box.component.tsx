import { Title } from 'atomic/atm.typography';
import React from 'react';
import { WordBoxWrapperStyled } from './word-box.component.style';

interface WordBoxProps {
  word: string;
  phonetics: string;
}

export const WordBox = (props: WordBoxProps) => {
  return (
    <WordBoxWrapperStyled>
      <Title fontWeight='Medium' size='XLarge'>
        {props.word}
      </Title>

      <Title fontWeight='Medium' size='XLarge'>
        {props.phonetics}
      </Title>
    </WordBoxWrapperStyled>
  );
};
