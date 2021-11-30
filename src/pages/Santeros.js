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
          <h1>Bio</h1>
            <p>
            Pedro Bergamo was born in Franca, a small city of shoemakers in the countryside of Brazil.
            He was named after his grandfather, who was a "Benzedor" (the Brazilian equivalent to the Afro-Caribbean "Santero")
            . He is the youngest biological son of Pedro Bergamo and nephew of Antonio Bergamo from the Sertanejo duo <a
            className="text_link" href={canario_passarinho} target="_blank" rel="noreferrer">
            "Canário e Passarinho"</a>.
            </p>
            <p>
            His musical journey started in the church but in his teenage years he
            gave up becoming a pastor to venture into <a className="text_link" href={furia}
            target="_blank" rel="noreferrer">Franca alternative scene</a>.
            In his twenties, he saw a cousin playing <a className="text_link" href={condor} target="_blank" rel="noreferrer">
            "O Último Condor" by Almir Sater</a> on a viola caipira and since then, he started to compose music in Portuguese,
            influenced by Brazilian singer-songwriters like Almir Sater and Zé Ramalho.
            When a friend was putting together a magician act he wrote and performed a set of
            original songs for the act "O Fantástico Circo de Aracnídea", which was a flop.
            In one of the rehearsals, though, one magician explained to him the chemistry behind a certain magic trick, which ignited
            his curiosity for the subject.
            </p>
            <p>
            In the following years he earned a Master's Degree in computational chemistry from Universidade de Franca, and
            published his scientific contributions in <a className="text_link" href={chemistry}
            target="_blank" rel="noreferrer">"Journal of Luminescence"</a>, <a className="text_link" href={chemicalphysics}
            target="_blank" rel="noreferrer">"Chemical Physics"</a>, <a className="text_link" href={chemistryc}
            target="_blank" rel="noreferrer">"Journal of Physical Chemistry C"</a> and <a className="text_link" href={natural}
            target="_blank" rel="noreferrer">"Natural Products Communications"</a>. After teaching chemistry for one year,
            he moved to Finland to pursue a Ph.D..
            In Finland, he met the Finnish EDM producer Joel Lindfors, who produced and released his compositions
            <Link target="_blank" className="text_link" to="music/2">"Lago Brasil"</Link> and
            <Link target="_blank" className="text_link" to="music/1">"Nós dois merecemos viver"</Link>.

            In 2020, influenced by the work of <a className="text_link" href={ariano}
            target="_blank" rel="noreferrer">"Ariano Suassuna"</a>, he produced 3 singles from
            the "O Fantástico Circo de Aracnídea" infamous show, using only Brazilian instruments at OctoSonus Studios-São Paulo.
            The songs were <Link target="_blank" className="text_link" to="music/3">"Abrahadabra"</Link>,
            <Link target="_blank" className="text_link" to="music/4">"Flores pelo céu" </Link> and
            <Link target="_blank" className="text_link" to="music/5">"Feiticeiro Esteve Aqui"</Link>.
            </p>
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
