import React from 'react';
import band from "../images/Santeros1.png"
import "./pages.css"

var satu = "https://www.satulankinen.fi/";

const Bio = () => {
  return(
    <div className="content">
          <h1>Pedro Bergamo & Los Santeros</h1>
            <img src={band} width="100%" alt="Los Santeros" />
            <p>Rolando Camilo - Drums & Vocals</p>
            <p>Seppo Salmi - Electric Guitar</p>
            <p>Pedro Bergamo - Acoustic Guitar & Vocals</p>
            <a className="text_link" href={satu} target="_blank" rel="noreferrer">
            <p>Satu Lankinen - Accordion & Vocals</p></a>

        </div>
    );
};

export default Bio;
