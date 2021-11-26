import React from 'react';
import { Link } from 'react-router-dom';
import MusicList from "./content/MusicList.json"
import "./pages.css"
import { Container, Row, Col } from "react-bootstrap";

import NosDois from "../images/CoverArts/NosDoisMerecemosViver.png"
import Flores from "../images/CoverArts/FloresPeloCeu.png"
import Abrahadabra from "../images/CoverArts/Abrahadabra.png"
import LagoBrasil from "../images/CoverArts/LagoBrasil.jpg"
import Feiticeiro from "../images/CoverArts/OFeiticeiroEsteveAqui.png"

function Music() {
  return (
    <Container>
      <Row>
      <Col xs={12} sm={6}>
        <div className="song-card">
        <Link className="link" to={`music/${MusicList[4].id}`}>
          <img src={Feiticeiro} width="100%" alt=""/>
          </Link>
        </div>
        <div className="song-card">
          <Link className="link" to={`music/${MusicList[3].id}`}>
          <img src={Flores} width="100%" alt=""/>

          </Link>
        </div>
        <div className="song-card">
          <Link className="link" to={`music/${MusicList[2].id}`}>
          <img src={Abrahadabra} width="100%" alt=""/>
        </Link>
        </div>
        </Col>
          <Col xs={12} sm={6}>
            <div className="song-card">
              <Link className="link" to={`music/${MusicList[1].id}`}>
              <img src={LagoBrasil} width="100%" alt=""/>
              </Link>
            </div>
            <div className="song-card">
            <Link className="link" to={`music/${MusicList[0].id}`}>
            <img src={NosDois} width="100%" alt=""/>
            </Link>
            </div>

          </Col>
      </Row>
    </Container>

          );
        }

export default Music;
