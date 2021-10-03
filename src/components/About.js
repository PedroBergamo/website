import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class About extends React.Component {
  render() {
    return (
      <Container id="about">
        <h1>Pedro Bergamo</h1>
        <h1> & Los Santeros</h1>
        <Row className="show-grid">
          <Col xs={12} sm={6}>
            <h5>
              <p>
              ‘Pedro Bergamo & Los Santeros’ is a Latin Rock band based in Helsinki,
              headed by the Brazilian singer-songwriter Pedro Bergamo. The lyrics venture into the magical realism of Gabriel Garcia Marquez,
              the Brazilian medievalism of Ariano Suassuna and the gothic poetry of Álvares de Azevedo.
              Once described as dark latin, its music draws inspiration from 70’s progressive rock, musica sacra and musica caipira,
              an ancient storytelling style of Brazilian cowboys.
              </p>
              <p>The members of Pedro Bergamo & Los Santeros are:</p>
              <p>Pedro Bergamo - Acoustic Guitar & Vocals</p>
              <p>Satu Lankinen - Accordion</p>
              <p>Rolando Camilo - Drums & Backing Vocals</p>
              <p>Javier Sanchez - Bass</p>
              <p>Seppo Salmi - Electric Guitar</p>
            </h5>
          </Col>
        </Row>
      </Container>
    );
  }
}
