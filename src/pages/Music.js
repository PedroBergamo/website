import React from 'react';

import { Container } from "react-bootstrap";
import MusicPlayer from "../components/MusicPlayer.js";
import VideoPlayer from "../components/VideoPlayer.js";

const Music = () => {
  return(
      <Container id="music">
        <div>
          <MusicPlayer/>
          <VideoPlayer/>
        </div>
      </Container >

  );
};

export default Music;
