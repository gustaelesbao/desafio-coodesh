import { WordContext } from 'app/contexts/word.context';
import { WordDTO } from 'app/DTOs/word.DTO';
import { Breakpoint } from 'atomic/atm.breakpoint';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { WordStyled } from './word.component.style';

interface WordProps {
  word: string;
  setDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: () => void;
}

export const Word = ({ onClick, word, setDialogIsOpen }: WordProps) => {
  const router = useRouter();
  const { setSelectedWord, selectedWord } = useContext(WordContext);

  const handleClickWord = (str: string) => {
    setSelectedWord(str);
    router.push({ query: { ...router.query, 'selected-word': str } });

    if (onClick) onClick();
  };

  return (
    <>
      <Breakpoint hideXs hideSm>
        <WordStyled selected={word === selectedWord} onClick={() => handleClickWord(word)}>
          {word}
        </WordStyled>
      </Breakpoint>

      <Breakpoint hideMd hideLg hideXl hideXxl>
        <WordStyled
          selected={word === selectedWord}
          onClick={() => {
            handleClickWord(word);
            setDialogIsOpen(true);
          }}
        >
          {word}
        </WordStyled>
      </Breakpoint>
    </>
  );
};
