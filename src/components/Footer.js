import React from 'react';
import '../index.css';
import SocialMedia from "./SocialMedia.js";
import {
      HashRouter, Switch, Route, Link, Redirect
  } from 'react-router-dom';
var Shop = "https://www.etsy.com/fi-en/shop/Visibilium"

const date = new Date();

const footerObj = {
    name: 'Pedro Bergamo',
    date: date.getFullYear(),
    contact: 'pedrobergamo89@gmail.com'
};

export default class Footer extends React.Component {
    render(){
        return (
                <footer className= "footer" >
                    <SocialMedia/>
                    <h3>{footerObj.contact}</h3>
                    <h3>&copy; {footerObj.date} - {footerObj.name}</h3>
                    <nav className="menu">
                        <li className="menu_link"><Link className="menu_link" to=
                        "/design">Design</Link></li>
                         <li className="menu_link"><Link className="menu_link" to=
                          "/music">Music</Link></li>
                          <a className="menu_link" href={Shop} target="_blank" rel="noreferrer">Shop</a>
                    </nav>


                </footer>


        );
    }
}
