import React from 'react';
import "./pages.css"

var satu = "https://www.satulankinen.fi/";

const santeros = () => {
  return(

    <div className="content">
        <h1>Pedro Bergamo & Los Santeros</h1>
        <p>Pedro Bergamo & Los Santeros is a latin folk band based in Helsinki.
        </p>
      <iframe width="560" height="315"
      src="https://www.youtube.com/embed/DxNS5W3CSqk"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
            <p>Pedro Bergamo - Acoustic Guitar & Vocals</p>
            <a className="text_link" href={satu} target="_blank" rel="noreferrer">
            <p>Satu Lankinen - Accordion & Vocals</p></a>
            <p>Seppo Salmi - Electric Guitar</p>
            <p>Rolando Camilo - Drums & Vocals</p>
        <p> </p>
        <h3>Contact for gigs:</h3>
        <p>phone: 0406740101</p>
        <p>email: pedrobergamo89@gmail.com</p>
        </div>
    );
};

export default santeros;
