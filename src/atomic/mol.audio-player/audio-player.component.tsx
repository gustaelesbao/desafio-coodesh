import { IconButton } from 'atomic/atm.icon-button';
import { PhIcon } from 'atomic/atm.phosphor-icons';
import { Slider } from 'atomic/atm.slider';
import { useAudioPlayer } from 'hooks/use-audio-player';
import React, { useRef } from 'react';
import { AudioPlayerStyled, AudioPlayerWrapperStyled } from './audio-player.component.style';

interface AudioPlayerProps {
  src: string;
}

export const AudioPlayer = (props: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer(audioRef);

  return (
    <AudioPlayerWrapperStyled>
      <AudioPlayerStyled ref={audioRef}>
        <source src={props.src} />
        Your browser does not support the <code>audio</code> element.
      </AudioPlayerStyled>

      {playing ? (
        <IconButton kind='tertiary' border size='Small' onClick={() => setPlaying(false)}>
          <PhIcon.Pause weight='fill' />
        </IconButton>
      ) : (
        <IconButton kind='tertiary' border size='Small' onClick={() => setPlaying(true)}>
          <PhIcon.Play weight='fill' />
        </IconButton>
      )}

      <Slider
        value={[curTime * 100]}
        onValueChange={(value) => {
          setClickedTime(value[0] / 100);
        }}
      />
    </AudioPlayerWrapperStyled>
  );
};
