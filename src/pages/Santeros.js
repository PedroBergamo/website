import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Santeros1 from "../images/Santeros1.png"
import Pedro from "../images/PedroBergamo_anders.jpg"

var canario_passarinho = "https://www.recantocaipira.com.br/duplas/canario_passarinho/canario_passarinho.html";
var furia = "https://www.youtube.com/watch?v=RJ8V-DpP1gM";
var condor = "https://www.youtube.com/watch?v=Czu7Yc6Fnmo";
var satu = "https://www.satulankinen.fi/";

const Texts = () => {
  return(
    <Container id="about">
      <h1>Los Santeros</h1>
      <Row className="show-grid">
      <Col xs={12} sm={6}>
          <img src={Pedro} width="100%" alt="Santeros"/>
      </Col>
        <Col xs={12} sm={6}>
          <h2>Line-up:</h2>
          <p>Pedro Bergamo - Acoustic Guitar & Vocals</p>
          <a className="text_link" href={satu} target="_blank" rel="noreferrer">
          <p>Satu Lankinen - Accordion & Vocals</p></a>
          <p>Rolando Camilo - Drums & Vocals</p>
          <p>Seppo Salmi - Electric Guitar</p>
          <h2>Bio</h2>
            <p>
            Pedro Augusto de Souza Bergamo was born in Franca, a small city of shoemakers in the interior of Brazil.
            He was named after his maternal grandfather, who was a santero and raised by his mom and step-father.
            He is biological son of Pedro Bergamo and nephew of Antonio Bergamo from the Sertanejo duo <a
            className="text_link" href={canario_passarinho} target="_blank" rel="noreferrer">
            "Canário e Passarinho"</a> .
            </p>
              <p>
            He started learning music in EMIM (a public music school from Franca) and when he was 12, he joined
            the worship group of a presbiterian church playing acoustic guitar and singing.
            When he was 18, he quit the church and moved to São Paulo where he sang and played in a hard rock band.
            He also worked as a seller in a CD/music instruments store and as a producer in a music studio.
             </p>
            <p>
            In his twenties, he returned to Franca and started his studies, which would eventually earn him a master degree in chemistry.
            Some years later, his father presented him a "viola caipira",
            a Brazilian traditional instrument, but he showed little interest until
            his cousin played <a className="text_link" href={condor} target="_blank" rel="noreferrer">
            "O último condor" by Almir Sater</a> on it. Since then, he started to compose music in Portuguese,
            influenced by Brazilian singer-songwriters like Almir Sater and
             Zé Ramalho.
               <p>
               </p>
            When a friend was putting a magician act and needed original music, he wrote and performed a set of
            original songs in Portuguese for the act "O circo de Aracnídea", but the show was a flop. After that he worked
            as a chemistry teacher and a radio host, besides playing in a Nirvana cover and original rock bands like Blind a man and <a
            className="text_link" href={furia} target="_blank" rel="noreferrer">Furia das máquinas</a>.
            When he was 27, after his teacher published his findings in "American Chemistry Society Journal",
            he moved to Finland to pursue a PhD.
            </p>
            <p>
            He worked one year as a researcher in
            modelling and simulation in Pori Research Center of Outotec, but his interest in graphic design and front-end led him to
            "Digital Solutions" team in Outotec's Helsinki office.
            During this period he produced and released two of his songs with the Finnish producer Joel Lindfors:
            "Lago Brasil" and "Nos dois merecemos viver".
            </p>
            <p>
            In the year 2020, he was visiting a friend who owned a home studio in São Paulo and influenced by
            Northeastern Brazilians like "Ariano Suassuna", a prolific patriotic author, and "Cordel do fogo encantado", he chose to record songs from
            the "Circo de Aracnídea" infamus show, with only Brazilian instruments. The songs were "Abrahadabra", "Flores pelo céu" and
            "Feiticeiro Esteve Aqui". In the same year he returned to Finland and in 2021 he joined the Latin band
            "La orquesta del fin del mundo", where he met Rolando, Satu and Seppo. After a rearrangement of the band, he quit and formed
            "Pedro Bergamo & Los Santeros" with some of the integrants, which focus on Pedro's original music.
            </p>

        </Col>
      </Row>

    </Container>
    );
};

export default Texts;
