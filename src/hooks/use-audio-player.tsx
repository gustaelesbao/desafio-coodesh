import { useState, useEffect } from 'react';

export const useAudioPlayer = (audio: React.MutableRefObject<HTMLAudioElement>) => {
  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState(0);

  useEffect(() => {
    const audioItem = audio.current;

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audioItem.duration);
      setCurTime(audioItem.currentTime);
    };

    const setAudioTime = () => {
      setCurTime(audioItem.currentTime);
    };

    // DOM listeners: update React state on DOM events
    audioItem.addEventListener('loadeddata', setAudioData);

    audioItem.addEventListener('timeupdate', setAudioTime);

    // React state listeners: update DOM on React state changes
    playing ? audioItem.play() : audioItem.pause();

    if (clickedTime && clickedTime !== curTime) {
      audioItem.currentTime = clickedTime;
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audioItem.removeEventListener('loadeddata', setAudioData);
      audioItem.removeEventListener('timeupdate', setAudioTime);
    };
  }, [audio, clickedTime, curTime, playing]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  };
};
