import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../store";
import "./MusicPlayer.scss";

interface IMusicPlayer {}

const MusicPlayer: FC<IMusicPlayer> = () => {
  const { track, isPlaying } = useSelector(
    ({ musicPlayer }: rootState) => musicPlayer
  );
  const [source, setSource] = useState(track);
  const audioRef = useRef<HTMLAudioElement>(null);

  useLayoutEffect(() => {
    if(audioRef.current){
        audioRef.current.src = track!;
    }
  }, [track]);
//   useLayoutEffect(() => {
//       if(!audioRef.current) return;
//      isPlaying ?  audioRef.current.play() : audioRef.current.pause()
//   }, [isPlaying]);
  return (
    // <div className={`container__music__player ${track ? 'zero' : 'negative'}`}>
    //   <div className="container-audio" style={{width: 0, height: 0}}>
    //     <audio controls ref={audioRef} loop autoPlay>
    //     </audio>
    //   </div>
    //   <p>prova</p>
    // </div>

           <div className={`w-100 fixed-bottom bottom-0 d-flex  music__player ${track ? 'zero' : 'negative'}`}>
            <audio ref={audioRef}  controls loop autoPlay  className="m-auto w-50">
            </audio>
            </div>
  );
};

export default MusicPlayer;
