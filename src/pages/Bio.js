import "../css/pages.css"
import {Container, Row, Col} from "react-bootstrap";
import PedroPhoto from "../images/photos/Pedro.png"

const Bio = () => {
  return(
    <div>
      <Container className= "content">
      <Row>
      <Col xs={12} md={4}>
        <img className="pedro-photo" src={PedroPhoto} alt="pedro"/>
      </Col>
      <Col xs={10} md={8}>
        <p>
          Pedro Bergamo is a Helsinki based photographer, graphic designer and award-winning researcher. Born in Franca, Brazil, into an Italian family of musicians, he worked for several years at his father’s business as a creative director before studying Design at California Institute of Arts. After moving to Europe, he obtained a Ph.D. in Digitalization at Luleå University of Technology and during this period, he published several scientific papers about User Experience, immersive technologies and education. After working four years with digital solutions at the Finnish Metso Outotec, he decided to put his visual skills under the service of musicians who are willing to eccentrify their identity and stand out in the industry.
        </p>
      </Col>

 <Col>
 </Col>
 </Row>
    </Container>
    </div>
    )
}

export default Bio;
