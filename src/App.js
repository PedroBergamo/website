import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import Footer from "./components/Footer.js";
import Music from "./pages/Music.js";
import Texts from "./pages/Texts.js";
import Services from "./pages/Services.js";
import NotFound from "./pages/NotFound.js"
import MusicPage from "./pages/MusicPage.js";
import science from "./pages/science.js";
import CookieConsent from "react-cookie-consent"
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
    <CookieConsent
      debug={true}
      style={{background: '#000', textAlign: 'left'}}
      buttonStyle={{color: '#000', background:'#fff', size: '14px'}}
      buttonText ='Sure!'
      expires={365}
      >We use cookies to ensure that you will have the best experience in this site. By continuing using this site we assume you are happy with it.</CookieConsent>
    <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="d4bf81fa-187c-46ef-a62a-6023e06a479f" data-blockingmode="auto" type="text/javascript"></script>
    <div className="header" id="myHeader">
    <h2>Pedro Bergamo</h2>
      <nav className="menu">
          <li className="menu_link"><Link className="menu_link" to=
          "/music">Music</Link></li>
          <li className="menu_link"><Link className="menu_link" to=
          "/about">Bio</Link></li>
      </nav>
    </div>

    <Switch>
    <Route exact path="/">
      <Redirect to="/about" />
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
