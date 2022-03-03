import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Santeros extends React.Component {
  render() {
    return (
      <Container id="Santeros">
        <h1>Los Santeros</h1>
        <Row className="show-grid">
          <Col xs={12} sm={6}>
            <h5>
              <p>
              ‘Pedro Bergamo & Los Santeros’ is a Latin Rock band based in Helsinki,
              headed by the Brazilian singer-songwriter Pedro Bergamo. Inspired by latin-american magical realism and ancient Finnish folklore,
              the band draws inspiration from 70’s progressive rock.
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
