import React, {useEffect} from 'react';
import Footer from "./components/Footer.js";
import Music from "./pages/Music.js";
import Texts from "./pages/Texts.js";
import Santeros from "./pages/Santeros.js";
import NotFound from "./pages/NotFound.js"
import MusicPage from "./pages/MusicPage.js";
import Portifolio from "./pages/Portifolio.js";
import wallpapers from "./pages/wallpapers.js";
import logo from "./images/Logos/logo.png"
import {
      HashRouter, Switch, Route, Link, Redirect
  } from 'react-router-dom';
import "./index.css"

function App() {
return (
    <HashRouter>
    <div className="header" id="myHeader">
    <img src={logo} width="20%" height= "30%" alt="logo"></img>
      <nav className="menu">
          <li className="menu_link"><Link className="menu_link" to=
          "/music">Music</Link></li>
          <li className="menu_link"><Link className="menu_link" to=
          "/press">Press Kit</Link></li>
          <li className="menu_link"><Link className="menu_link" to=
          "/design">Design</Link></li>
      </nav>
    </div>

    <Switch>
    <Route exact path="/">
      <Redirect to="/design" />
    </Route>
    <Route path="/404" component={NotFound} />
    <Route path="/music/:id" render={props => <MusicPage {...props}/>} />
    <Route path="/press" component={Santeros} />
      <Route path="/design" component={Portifolio} />
    <Route path="/music" exact>
      <Music />
    </Route>
    <Route path="/texts" exact>
      <Texts />
    </Route>
    <Route path="/wallpapers" component={wallpapers} />
    </Switch>
    <Footer a id="f"/>
    </HashRouter>
  );
}

export default App;
