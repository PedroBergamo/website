import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Twitter from './Twitter.js';
import Navigation from "./Navigation.js";

const MediaOutlet = {
    facebook: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKeithPalusoMusic&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
};

const style = {
    border: '0',
    overflow: 'hidden',
    width: '100%',
    height: '350px'
};

export default class SocialMedia extends React.Component {

    render() {

        return (
            <Navigation />
        );
    }
}
