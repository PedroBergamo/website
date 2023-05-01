import React from 'react';
import "../css/pages.css";
import {Col, Container} from "react-bootstrap";

import Niilo from "../images/photos/niilo.jpg";
import Bass from "../images/photos/bass-vimma.jpg";
import Pedro from "../images/photos/pedro-elina.jpg";
import Eevaa from "../images/photos/eevaa.jpg";
import Samppa from "../images/photos/samppa.jpg";
import Eagle from "../images/photos/eagle.jpg";
import Ene from "../images/photos/ene.jpg";
import Photo9 from "../images/photos/photo9.jpg";
import Elsi from "../images/photos/elsi.jpg";
import Halophones from "../images/photos/photo11.jpg";
import Portland from "../images/photos/photo12.png";

function Photos() {
  return(
    <Container className="gallery">
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Niilo} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Bass} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Pedro} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo9} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Elsi} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Halophones} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Portland} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Ene} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Samppa} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Eevaa} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Eagle} width="100%" alt=""/>
        </Col>

      </Container>
    );
};

export default Photos;
