import React from 'react';

const date = new Date();

const footerObj = {
    name: 'Pedro Bergamo',
    date: date.getFullYear(),
    contact: 'pedrobergamo89@gmail.com'
};

const styles = {
    container:{
        background: '',
        left:'0px',
        right:'0px',
        width: '100vw',
        padding:'2em',
        color:'#9d9d9d',
        marginTop:'5em'
    },
    footer:{
        textAlign: 'center'
    }
};

export default class Footer extends React.Component {
    render(){
        return (
            <div style={styles.container}>
                <footer style={styles.footer}>
                    <p>{footerObj.contact}</p>
                    <p>&copy; {footerObj.date} - {footerObj.name}</p>
                </footer>
            </div>
        );
    }
}
