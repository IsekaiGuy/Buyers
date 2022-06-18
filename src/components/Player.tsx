import React from 'react';
import VideoPlayer from 'react-native-video-player';

const Player = () => {
  return (
    <VideoPlayer
      autoplay={false}
      video={{
        uri: 'https://movies1.fox-fan.tv/video1/K0FjpL2zcvzndKNeJ8q65Q/1655631227/paradise/3/omskbird/303.mp4',
      }}
      videoWidth={1600}
      videoHeight={900}
      thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
    />
  );
};

export default Player;
