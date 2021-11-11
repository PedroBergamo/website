import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Santeros1 from "../images/Santeros1.png"
import Pedro from "../images/PedroBergamo_anders.jpg"

var canario_passarinho = "https://www.recantocaipira.com.br/duplas/canario_passarinho/canario_passarinho.html";
var furia = "https://www.youtube.com/watch?v=RJ8V-DpP1gM";
var condor = "https://www.youtube.com/watch?v=Czu7Yc6Fnmo";
var satu = "https://www.satulankinen.fi/";
var chemistry = "https://www.sciencedirect.com/science/article/pii/S0022231316305737";
var chemicalphysics = "https://www.sciencedirect.com/science/article/pii/S0301010416301501";
var chemistryc = "https://www.scopus.com/record/display.uri?eid=2-s2.0-85020209527&origin=recordpage&featureToggles=FEATURE_VIEW_PDF:1";
var natural = "https://www.scopus.com/record/display.uri?eid=2-s2.0-85019731851&origin=recordpage&featureToggles=FEATURE_VIEW_PDF:1";
var ariano = "https://en.wikipedia.org/wiki/Ariano_Suassuna";

const Texts = () => {
  return(
    <Container id="about">
      <h1>Bio</h1>
      <Row className="show-grid">
      <Col xs={12} sm={6}>
      </Col>
        <Col xs={12} sm={6}>
            <p>
            Pedro Augusto de Souza Bergamo was born in Franca, a small city of shoemakers in the countryside of Brazil.
            He was named after his maternal grandfather, who was a "benzedor" (the Brazilian equivalent to the Afro-Caribbean "Santero") and raised by his mother
             and step-father. He is the youngest biological son of Pedro Bergamo and nephew of Antonio Bergamo from the Sertanejo duo <a
            className="text_link" href={canario_passarinho} target="_blank" rel="noreferrer">
            "Canário e Passarinho"</a>.
            </p>
              <p>
            His musical journey started in the church playing acoustic guitar and singing, but his curiosity
            and hard temper led him to quit and start composing metal and hard rock music.
            In his youth, beside cover gigs, he played and sang in original rock bands from <a className="text_link" href={furia}
            target="_blank" rel="noreferrer">Franca alternative scene</a>.
            </p>
            <p>
            Some years later, his father presented him with a "viola caipira",
            a Brazilian traditional instrument, which he showed little interest until
            his cousin played <a className="text_link" href={condor} target="_blank" rel="noreferrer">
            "O último condor" by Almir Sater</a> on it. Since then, he started to compose music in Portuguese,
            influenced by Brazilian singer-songwriters like Almir Sater and Zé Ramalho.
            </p>
            <p>
            Around that time, a friend was putting together a magician act and needed original music. He wrote and performed a set of
            original songs in Portuguese for the act "O Fantástico Circo de Aracnídea", which was a flop.
            In one of the rehearsals, though, one magician explained to him the chemistry behind a certain magic trick, which ignited
            his curiosity for the subject.
            </p>
            <p>
            Putting music aside for a while, he earned a Master's Degree in computational chemistry from Universidade de Franca, and
            published his scientific contributions in <a className="text_link" href={chemistry}
            target="_blank" rel="noreferrer">"Journal of Luminescence"</a>, <a className="text_link" href={chemicalphysics}
            target="_blank" rel="noreferrer">"Chemical Physics"</a>, <a className="text_link" href={chemistryc}
            target="_blank" rel="noreferrer">"Journal of Physical Chemistry C"</a> and <a className="text_link" href={natural}
            target="_blank" rel="noreferrer">"Natural Products Communications"</a>. After teaching chemistry for one year,
            he moved to Finland to pursue a Ph.D..
            </p>
            <p>
            After 2 years living in Finland, he met the Finnish producer Joel Lindfors, who produced and released his compositions
             "Lago Brasil" and "Nós dois merecemos viver".
            </p>
            <p>
            2020 was a hard year for the composer, due to the loss of a dear one. While visiting Brazil, he took confort in the work of <a className="text_link" href={ariano}
            target="_blank" rel="noreferrer">"Ariano Suassuna"</a>, which inspired him to produce songs from
            the "O Fantástico Circo de Aracnídea" infamous show, using only Brazilian instruments at OctoSonus Studios-São Paulo. The songs were "Abrahadabra", "Flores pelo céu" and
            "Feiticeiro Esteve Aqui".
            </p>
              <p>
            By returning to Finland, he joined a Latin band where he met Rolando, Satu and Seppo. Months later,
            "Pedro Bergamo & Los Santeros" was born. The result is a mixture of sertanejo, Finnish folk and progressive
            rock.
            </p>
            <h2>Line-up:</h2>
            <p>Pedro Bergamo - Acoustic Guitar & Vocals</p>
            <a className="text_link" href={satu} target="_blank" rel="noreferrer">
            <p>Satu Lankinen - Accordion & Vocals</p></a>
            <p>Rolando Camilo - Drums & Vocals</p>
            <p>Seppo Salmi - Electric Guitar</p>
        </Col>
      </Row>

    </Container>
    );
};

export default Texts;
