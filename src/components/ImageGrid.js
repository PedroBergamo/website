import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image1 from "../images/Pedro-inside.jpg";
import image2 from "../images/Pedro-inside.jpg";
import image3 from "../images/Pedro-inside.jpg";


export default class ImageGrid extends React.Component {

    render() {

        return (

            <Container id="images">
                <h1>Images / Photos</h1>
                <h3>Keith Paluso with Blood, Sweat, & Tears - 2019</h3>
                <Row className="show-grid">
                    <Col xs md={4}>
                        <Image src={image1} width="100%" />
                    </Col>
                    <Col xs md={4}>
                        <Image src={image2} width="100%" />
                    </Col>
                    <Col xs md={4}>
                        <Image src={image3} width="100%" />
                    </Col>
                </Row>
                <h5>Great American Beach Party in Fort Lauderdale, Florida</h5>
            </Container>
        );
    }
}
