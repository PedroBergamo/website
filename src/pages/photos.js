import React from 'react';
import "../css/pages.css";
import {Col, Container} from "react-bootstrap";
import Links from "../components/links.js";

import Photo1 from "../images/photos/photo1.jpg";
import Photo2 from "../images/photos/photo2.jpg";
import Photo4 from "../images/photos/photo4.jpg";
import Photo5 from "../images/photos/photo5.png";
import Photo6 from "../images/photos/photo6.jpg";
import Photo7 from "../images/photos/photo7.jpg";
import Photo8 from "../images/photos/photo8.jpg";
import Photo9 from "../images/photos/photo9.jpg";
import Photo10 from "../images/photos/photo10.jpg";
import Photo11 from "../images/photos/photo11.jpg";
import Photo12 from "../images/photos/photo12.png";

function Photos() {
  return(
    <Container className="gallery">
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo1} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo7} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo4} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo9} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo10} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo11} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo12} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo8} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo6} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo5} width="100%" alt=""/>
        </Col>
        <Col xs={12} md={4} lg={3} className="gallery">
        <img src={Photo2} width="100%" alt=""/>
        </Col>

      </Container>
    );
};

export default Photos;
