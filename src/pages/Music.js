import React from 'react';
import { Link } from 'react-router-dom';
import MusicList from "./content/MusicList.json"
import "./pages.css"
import { Container, Row, Col } from "react-bootstrap";

function Music() {
  return (
    <Container>
      <Row>
      <Col xs={12} sm={6}>
        <div className="song-card">
        <Link className="link" to={`music/${MusicList[0].id}`}>
          <img src={`static/media/${MusicList[0].CoverArt}`} width="100%" alt=""/>
          </Link>
        </div>
        <div className="song-card">
          <Link className="link" to={`music/${MusicList[1].id}`}><img src={`static/media/${MusicList[1].CoverArt}`} width="100%" alt=""/>
          </Link>
        </div>
        <div className="song-card">
          <Link className="link" to={`music/${MusicList[2].id}`}>
          <img src={`static/media/${MusicList[2].CoverArt}`} width="100%" alt=""/>
        </Link>
        </div>
        </Col>
          <Col xs={12} sm={6}>
            <div className="song-card">
              <Link className="link" to={`music/${MusicList[3].id}`}>
              <img src={`static/media/${MusicList[3].CoverArt}`} width="100%" alt=""/>
              </Link>
            </div>
            <div className="song-card">
            <Link className="link" to={`music/${MusicList[4].id}`}>
            <img src={`static/media/${MusicList[4].CoverArt}`} width="100%" alt=""/>
            </Link>
            </div>

          </Col>
      </Row>
    </Container>

          );
        }

export default Music;
