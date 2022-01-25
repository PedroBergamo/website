import React from 'react';
import "./pages.css";
import {Col} from "react-bootstrap";
import BookMeBanner from "../images/BookMe2.jpg"

const Santeros = () => {
  return(
    <div className="BookMe" >
    <img src={BookMeBanner} width="100%" height= "30%" alt="BookMeBanner"></img>
        <Col xs={12} md={8}>
        <h1>" Soulfull, mystical and danceable. It is like a cool gypsy band. A hidden gem in Helsinki that everyone should experience!" - Elina</h1>
        <p>Pedro Bergamo is a Brazilian singer and multi-instrumentist based in Helsinki - Finland. He has a vast repertoire of Brazilian, latin and rock music, besides his original tunes.
        No matter the size of your event, Pedro will surely be a warm addition to your party. He can play solo (acoustic guitar and voice) or with a whole group.</p>
        <h1>Contact for gigs:</h1>
        <p>phone: (+358)406740101</p>
        <p>email: pedrobergamo89@gmail.com</p>
        </Col>
        <Col className="last-column" xs={6} md={4}>
        <iframe width="560" height="315"  className="video"
        src="https://www.youtube.com/embed/DxNS5W3CSqk"
        title="YouTube video player" fframeBorder="0" allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </Col>

        </div>
    );
};

export default Santeros;
