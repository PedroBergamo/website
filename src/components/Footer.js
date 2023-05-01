import React from 'react';
import '../css/components.css';
import SocialMedia from "./SocialMedia.js";
const date = new Date();

const footerObj = {
    name: 'Pedro Bergamo',
    date: date.getFullYear(),
    contact: 'pedro@bergamocreations.com'
};

export default class Footer extends React.Component {
    render(){
        return (
                <footer className= "footer" >
                    <SocialMedia/>
                    <p>{footerObj.contact}</p>
                    <p>&copy; {footerObj.date} - {footerObj.name}</p>
                </footer>


        );
    }
}
