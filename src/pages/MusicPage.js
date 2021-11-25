import React from 'react';
import MusicList from "./content/MusicList.json"
import {Redirect} from "react-router-dom"
import "./pages.css"


const MusicPage = (props) => {
  const ValidId = parseInt(props.match.params.id)
  if(!ValidId){
    return <Redirect to="/404" />
  }
  const fetchedSong = {}
  MusicList.forEach((item, i) => {
    if(ValidId === item.id){
      fetchedSong.title = item.title ? item.title: "No title given"
      fetchedSong.lyrics = item.lyrics ? item.lyrics: "No lyrics available"
      fetchedSong.video = item.video ? item.video: "No video given"
      fetchedSong.bandcamp = item.bandcamp ? item.bandcamp: "No content given"
    }
  });

  return(
    <div className="song">
          <h1>{fetchedSong.title}</h1>
          {fetchedSong.lyrics.map((verse, i) => {
            return <p className="lyrics">{verse}</p>
          })}
    </div>
    );
};

export default MusicPage;
