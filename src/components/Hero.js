import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const heroObj = {
    title: 'Pedro Bergamo',
    subtitle: ''
};

const styles = {
    hero: {
        borderRadius: '0',
        textAlign: 'center',
        background: 'transparent',
        height: '100vh',
        display: 'flex',

    },
    content:{
        maxWidth: '50vw'
    },
    scroll:{
        position: 'relative',
        top: '5vh'
    }
};

export default class Hero extends React.Component {

    render() {

        return (

            <Jumbotron style={styles.hero} id="top">
                <div>
                    <h1 style={styles.h1}>{heroObj.title}</h1>
                    <h3 style={styles.h3}>{heroObj.subtitle}</h3>
                  </div>
            </Jumbotron>
        );
    }
}
