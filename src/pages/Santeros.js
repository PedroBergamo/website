import React from 'react';
import band from "../images/Santeros1.png"
import "./pages.css"
import {Link} from "react-router-dom"

var canario_passarinho = "https://www.recantocaipira.com.br/duplas/canario_passarinho/canario_passarinho.html";
var furia = "https://www.youtube.com/watch?v=RJ8V-DpP1gM";
var condor = "https://www.youtube.com/watch?v=Czu7Yc6Fnmo";
var satu = "https://www.satulankinen.fi/";
var chemistry = "https://www.sciencedirect.com/science/article/pii/S0022231316305737";
var chemicalphysics = "https://www.sciencedirect.com/science/article/pii/S0301010416301501";
var chemistryc = "https://www.scopus.com/record/display.uri?eid=2-s2.0-85020209527&origin=recordpage&featureToggles=FEATURE_VIEW_PDF:1";
var natural = "https://www.scopus.com/record/display.uri?eid=2-s2.0-85019731851&origin=recordpage&featureToggles=FEATURE_VIEW_PDF:1";
var ariano = "https://en.wikipedia.org/wiki/Ariano_Suassuna";



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
