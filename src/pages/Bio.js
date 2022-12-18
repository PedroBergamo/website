import "./pages.css"
import Clients from "../components/Clients.js";
import EscuteArt from "../images/CoverArts/escute.jpg";
import {Container, Row, Col} from "react-bootstrap";

import SplashVideo from "../Resources/splash-video.mp4";
var YouTube = "https://youtu.be/hBq6cZH_T2E";
var Spotify = "http://bit.ly/3iZtRL5";


const Bio = () => {
  return(
    <div>
      <div className="splash-video">
      <video className="splash-video" autoPlay loop muted>
        <source src={SplashVideo} type="video/mp4"/>
      </video>
      <div className="video-button">
      <h2>Escute o som que vem daqui</h2>
      <a href={YouTube}>
        <button type="button">Assista o clipe</button>
      </a>
      </div>

      </div>
      <div className= "content">
      <Container>
      <Row>
      <Col xs={12} md={4}>
      </Col>
      <Col xs={10} md={8}>
          <h2>Escute o som que vem daqui - 06.01.23</h2>
          <img src={EscuteArt} className="cover-escute" alt=""/>
          <p style={{marginTop: "10%"}}>
          Cantor, compositor e multi instrumentista brasileiro radicado na Finlândia, Pedro Bergamo une a sua paixão pela MPB setentista com o rock progressivo nórdico em uma viagem psicodélica e solar no single “Escute o som que vem daqui”. A faixa, que sugere início de ciclos e renascimentos, mostra o recomeço de um trabalho artístico para Bergamo ao mesmo tempo que pode dialogar com o ouvinte que busca no ano novo uma página em branco.
          Ouça   <a className="text_link" href={YouTube} target="_blank" rel="noreferrer">“Escute o som que vem daqui”</a> ou
          assista ao <a className="text_link" href={YouTube} target="_blank" rel="noreferrer">clipe</a>
 </p>
 </Col>

 <Col>
 </Col>
 </Row>
    </Container>
      </div>
    </div>
    )
}

export default Bio;
