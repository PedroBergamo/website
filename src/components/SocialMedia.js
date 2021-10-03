import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const navObj = {
    navStyle: {
        fontSize: '1em',
        float: 'center',
    },
    brandStyle: {
        fontSize: '1.4em'
    },
    linkStyle: {
      marginRight: '16px'
    }
};

export default class SocialMedia extends React.Component {
    render() {
        return (
            <Navbar expand bg="dark" variant="dark" sticky="top">
                <Nav className="mr-auto" style={navObj.navStyle}>
                    <Nav.Link
                        href="https://www.facebook.com/PedroBergamoOfficial/"
                        target="_blank"
                        alt="Facebook"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-facebook black" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://www.youtube.com/channel/UCNQ8zZfIcpQf9cNEYxsoiOQ"
                        target="_blank"
                        alt="ReverbNation"
                        style={navObj.linkStyle}
                      >
                        <span className="fa fa-youtube black" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://www.instagram.com/pedro.bergamo/"
                        target="_blank"
                        alt="Instagram"
                        style={navObj.linkStyle}
                      >
                        <span className="fa fa-instagram black" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://open.spotify.com/artist/3mRWEl21jxyttpZH1s7TSd?si=7108dad7994b415c"
                        target="_blank"
                        alt="ReverbNation"
                        style={navObj.linkStyle}
                      >
                        <span className="fa fa-spotify black" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://pedrobergamo.bandcamp.com"
                        target="_blank"
                        alt="Bandcamp"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-bandcamp black" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
