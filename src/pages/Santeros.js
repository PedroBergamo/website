import React from 'react';
import "./pages.css"

import {
       Link
  } from 'react-router-dom';

var satu = "https://www.satulankinen.fi/";
var furia = "https://www.youtube.com/watch?v=RJ8V-DpP1gM";
var canario_passarinho = "https://www.recantocaipira.com.br/duplas/canario_passarinho/canario_passarinho.html";
var condor = "https://www.youtube.com/watch?v=3X10mtS_nxw";

const Santeros = () => {
  return(

    <div className="content">
        <h1>Pedro Bergamo & Los Santeros</h1>

      <iframe width="560" height="315" className="video"
      src="https://www.youtube.com/embed/DxNS5W3CSqk"
      title="YouTube video player" fframeBorder="0" allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen="allowfullscreen"
      mozallowfullscreen="mozallowfullscreen"
      msallowfullscreen="msallowfullscreen"
      oallowfullscreen="oallowfullscreen"
      webkitallowfullscreen="webkitallowfullscreen"></iframe>
            <p>Pedro Bergamo & Los Santeros is a latin folk band based in Helsinki composed by</p>
            <p>Pedro Bergamo - Acoustic Guitar & Vocals</p>
            <a className="text_link" href={satu} target="_blank" rel="noreferrer">
            <p>Satu Lankinen - Accordion & Vocals</p></a>
            <p>Seppo Salmi - Electric Guitar</p>
            <p>Rolando Camilo - Drums</p>
        <p> </p>
              <p> </p>
        <h2>Contact for gigs:</h2>
        <p>phone: (+358)406740101</p>
        <p>email: pedrobergamo89@gmail.com</p>
        <h2>Press Kit</h2>
        <p>
        Pedro Bergamo was born in Franca, a small city of shoemakers in the countryside of Brazil.
        He was named after his grandfather, who was a "Benzedor" (the Brazilian equivalent to the Afro-Caribbean "Santero")
        . He is the youngest biological son of Pedro Bergamo and nephew of Antonio Bergamo from the Sertanejo duo <a
        className="text_link" href={canario_passarinho} target="_blank" rel="noreferrer">
        "Canário e Passarinho"</a>.
        </p><p>
        His musical journey started playing guitar and bass in a presbiterian
        church but in his teenage years he
        gave up becoming a pastor to venture into <a className="text_link" href={furia}
        target="_blank" rel="noreferrer">Franca alternative scene</a>.
        In his twenties, he saw a cousin playing <a className="text_link" href={condor} target="_blank" rel="noreferrer">
        "O Último Condor" by Almir Sater</a> on a viola caipira and since then, he started to compose music in Portuguese,
        influenced by Brazilian singer-songwriters like Almir Sater and Zé Ramalho.
        When a friend was putting together a magician act he wrote and performed a set of
        original songs for the act. At one of the rehearsals, one magician explained
        to him the chemistry behind a certain magic trick, which led him to pursue a career in
          <Link target="_blank" className="text_link" to="science">science</Link> and move
        to Finland to pursue a Ph.D..
        In Finland, he met the Finnish EDM producer Joel Lindfors, who produced and released his compositions
        <Link target="_blank" className="text_link" to="music/2">"Lago Brasil"</Link> and
        <Link target="_blank" className="text_link" to="music/1">"Nós dois merecemos viver"</Link>.
        In 2020, influenced by the work of "Ariano Suassuna", he produced 3 singles from
        the magician act, using only Brazilian instruments at OctoSonus Studios-São Paulo.
        The songs were <Link target="_blank" className="text_link" to="music/3">"Abrahadabra"</Link>,
        <Link target="_blank" className="text_link" to="music/4">"Flores pelo céu" </Link> and
        <Link target="_blank" className="text_link" to="music/5">"Feiticeiro Esteve Aqui"</Link>.
        </p> <p>
        In 2021, he met Rolando Camilo, a Chilean drummer, percussionist and producer living in Helsinki,
        and they formed Los Santeros to focus only on Pedro's originals. Later on he brought the Fnnishs
        accordionist Satu Lankinen and the Finnish Guitarrist Seppo Salmi, who
        shared a folk/punk band together previously. They are currently on studio producing their debut album.
        </p>
        </div>
    );
};

export default Santeros;
