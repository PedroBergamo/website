import React from 'react';
import { Link } from 'react-router-dom';
import MusicList from "./content/MusicList.json"
import "./pages.css"
import { Container, Row, Col } from "react-bootstrap";

function Music() {
  return (
    <Container>
      <Row>
      <h1>Music</h1>
        <Col xs={12} sm={6}>
        <div className="song-card">
          <img src={`static/media/${MusicList[0].CoverArt}`} width="100%" alt=""/>
          <h4><Link className="link" to={`music/${MusicList[0].id}`}>{MusicList[0].title}</Link></h4>
        </div>
        <div className="song-card">
          <img src={`static/media/${MusicList[1].CoverArt}`} width="100%" alt=""/>
          <h4><Link className="link" to={`music/${MusicList[1].id}`}>{MusicList[1].title}</Link></h4>
        </div>
        <div className="song-card">
          <img src={`static/media/${MusicList[2].CoverArt}`} width="100%" alt=""/>
          <h4><Link className="link" to={`music/${MusicList[2].id}`}>{MusicList[2].title}</Link></h4>
        </div>
        </Col>
          <Col xs={12} sm={6}>
            <div className="song-card">
              <img src={`static/media/${MusicList[3].CoverArt}`} width="100%" alt=""/>
              <h4><Link className="link" to={`music/${MusicList[3].id}`}>{MusicList[3].title}</Link></h4>
            </div>
            <div className="song-card">
              <img src={`static/media/${MusicList[4].CoverArt}`} width="100%" alt=""/>
              <h4><Link className="link" to={`music/${MusicList[4].id}`}>{MusicList[4].title}</Link></h4>
            </div>

          </Col>
      </Row>
    </Container>

          );
        }

export default Music;
