import React, { createContext, useEffect, useRef, useState } from 'react';

interface WordData {
  selectedWord: string;
  setSelectedWord: (selectedWord: string) => void;

  history: string[];
  setHistory: (History: string[]) => void;

  favorites: string[];
  setFavorites: (History: string[]) => void;
}

export const WordContext = createContext<WordData>(null);

export const WordProvider = (props: React.PropsWithChildren) => {
  const initialRender = useRef(true);

  const [selectedWord, setSelectedWord] = useState('a');
  const [history, setHistory] = useState<string[]>();
  const [favorites, setFavorites] = useState<string[]>();

  useEffect(() => {
    const localstorageHistory = JSON.parse(localStorage.getItem('HISTORY'));
    const localstorageFavorites = JSON.parse(localStorage.getItem('FAVORITES'));

    setHistory(localstorageHistory);
    setFavorites(localstorageFavorites);
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    localStorage.setItem('HISTORY', JSON.stringify(history));
    localStorage.setItem('FAVORITES', JSON.stringify(favorites));
  }, [history, favorites]);

  return (
    <WordContext.Provider value={{ favorites, setFavorites, history, setHistory, selectedWord, setSelectedWord }}>
      {props.children}
    </WordContext.Provider>
  );
};
