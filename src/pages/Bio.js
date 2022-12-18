import "./pages.css"
import EscuteArt from "../images/CoverArts/escute.jpg";
import {Container, Row, Col} from "react-bootstrap";
import Pedro from "../images/Photos/pedro-anders.png";

import SplashVideo from "../Resources/splash-video.mp4";
var YouTube = "https://youtu.be/hBq6cZH_T2E";


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
          <p>
          Nascido em uma família de músicos, Pedro busca desde cedo unir suas influências musicais ecléticas do flamenco, folk, forró e rock com seu interesse em assuntos místicos, históricos e filosóficos. Influenciado por seu avô que era benzedor, tarólogo e contador de causos, o artista iniciou sua discografia com o single “Lago Brasil” em 2019, contando uma trágica história indígeno-Brasileira fazendo uma ponte entre o dialeto caipira de trovadores paulistas como Tião Carreiro e Pardinho, e o folk rural do nordeste setentista de Zé Ramalho, seu maior ídolo. Um ano após, em meio a uma perda pessoal forte e inspirado pela obra de Ariano Suassuna, Pedro produz “Abrahadabra!”.
          </p>
          <p>
          Trabalhando em seu disco de estreia, ele dá a primeira amostra de sonoridade com “Escute o som que vem daqui”. Produzido pelo guitarrista Lauri Loikkanen, da banda finlandesa The Halophones e masterizado por Jaakko Virtalähde (Death Hawks, Mikko Joensuu), a faixa chega com um clipe dirigido pelo diretor sueco-finlandês Anders Ragnar. A faixa está disponível em todas as plataformas de música digital e o clipe, no canal do YouTube do artista.
          </p>
          <img src={Pedro} width="100%" alt=""/>
          <p> Foto: Anders Ragnar.
          </p>

          <h2>Ficha Técnica</h2>
          <p>
          Letra & Música: Pedro Bergamo<br/>

          Vozes & Violões: Pedro Bergamo<br/>
          Contrabaixo: Nuutti Autio<br/>
          Bateria: Eetu Peltoluhta<br/>
          Guitarra, Orgão, Piano & Mellotron: Lauri Loikkanen<br/>

          Produção & Mixagem: Lauri Loikkanen<br/>
          Masterizaçäo: Jaakko Virtalähde<br/>
          Arte de capa: Pedro Bergamo<br/>
          Video: Anders Ragnar<br/>
          </p>
          <p style={{textAlign:"right"}}> Texto por Build-up media.
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
