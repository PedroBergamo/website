import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import Footer from "./components/Footer.js";
import CustomLogo from "./images/Logo2.png";
import Santeros from "./pages/Santeros.js";
import Music from "./pages/Music.js";
import Texts from "./pages/Texts.js";
import Services from "./pages/Services.js";
import useWindowSize from "./utils/useWindowSize.js";

import {
      HashRouter, Switch, Route, Link
  } from 'react-router-dom';

function App() {
useEffect(() => {
  ReactGA.initialize('UA-211790415-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
},[])
  const { width } = useWindowSize();

  return (
    <HashRouter>
    {width < 1000 && (
     <>
       <div>
       </div>
     </>
   )}

    <div className="container">
    <img className="custom-logo" src={CustomLogo} alt="Custom Logo"></img>
        <nav className="menu">
                <ul>
                    <li className="menu-item"><Link className="menu__link" to="/bio">Bio</Link></li>
                    <li className="menu-item"><Link className="menu__link" to="/music">Music</Link></li>
                </ul>
        </nav>
    </div>
    <Switch>
    <Route path="/bio" exact>
      <Santeros />
    </Route>
    <Route path="/music" exact>
      <Music />
    </Route>
    <Route path="/texts" exact>
      <Texts />
    </Route>
    <Route path="/services" exact>
      <Services />
    </Route>
    </Switch>
      <Footer a id="f"/>
    </HashRouter>
  );
}

export default App;
