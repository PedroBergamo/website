import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export default class Projects extends React.Component {

    render() {

        return (

            <Container id="projects">
                <h1>Musical Projects </h1>
                <Row className="showGrid">
                    <Col xs={12}>
                        <p>Check out my released songs on spotify.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
