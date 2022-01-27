import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import Footer from "./components/Footer.js";
import Santeros from "./pages/Santeros.js";
import Music from "./pages/Music.js";
import Texts from "./pages/Texts.js";
import Services from "./pages/Services.js";
import NotFound from "./pages/NotFound.js"
import MusicPage from "./pages/MusicPage.js";
import science from "./pages/science.js";
import wallpapers from "./pages/wallpapers.js";
import {
      HashRouter, Switch, Route, Link, Redirect
  } from 'react-router-dom';
import "./index.css"

function App() {
useEffect(() => {
  ReactGA.initialize('UA-211790415-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
},[])

return (
    <HashRouter>
    <div className="header" id="myHeader">
    <h2>Pedro Bergamo</h2>
      <nav className="menu">
          <li className="menu_link"><Link className="menu_link" to=
          "/music">Music</Link></li>
          <li className="menu_link"><Link className="menu_link" to=
          "/santeros">Book me</Link></li>
          <li className="menu_link"><Link className="menu_link" to=
          "/about">About</Link></li>
      </nav>
    </div>

    <Switch>
    <Route exact path="/">
      <Redirect to="/santeros" />
   </Route>
    <Route path="/santeros" exact>
      <Santeros />
    </Route>
    <Route path="/404" component={NotFound} />
    <Route path="/music/:id" render={props => <MusicPage {...props}/>} />
    <Route path="/about" component={science} />
    <Route path="/music" exact>
      <Music />
    </Route>
    <Route path="/texts" exact>
      <Texts />
    </Route>
    <Route path="/services" exact>
      <Services />
    </Route>
    <Route path="/wallpapers" component={wallpapers} />
    </Switch>
    <Footer a id="f"/>
    </HashRouter>
  );
}

export default App;
