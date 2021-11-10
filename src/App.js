import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import Footer from "./components/Footer.js";
import CustomLogo from "./images/LogoWhite.jpg";
import Santeros from "./pages/Santeros.js";
import Music from "./pages/Music.js";
import Texts from "./pages/Texts.js";
import Services from "./pages/Services.js";

import {
    BrowserRouter as Router, Switch, Route, Link
  } from 'react-router-dom';

function App() {
useEffect(() => {
  ReactGA.initialize('UA-211790415-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
},[])

  return (
    <Router>
    <div className="container center">
        <nav className="menu">
          <img className="custom-logo" src={CustomLogo} alt="Custom Logo"></img>
            <div className="menu__right">

                <ul className="menu__list">
                    <li className="menu__list-item"><Link className="menu__link" to="/lossanteros">Los Santeros</Link></li>
                    <li className="menu__list-item"><Link className="menu__link" to="/music">Music</Link></li>
                </ul>
            </div>
        </nav>
    </div>
    <Switch>
    <Route path="/lossanteros" exact>
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
    </Router>
  );
}

export default App;
