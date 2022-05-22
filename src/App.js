import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import Footer from "./components/Footer.js";
import Music from "./pages/Music.js";
import Texts from "./pages/Texts.js";
import Santeros from "./pages/Santeros.js";
import NotFound from "./pages/NotFound.js"
import MusicPage from "./pages/MusicPage.js";

import Portifolio from "./pages/Portifolio.js";
import CookieConsent from "react-cookie-consent"
import wallpapers from "./pages/wallpapers.js";
import logo from "./images/Logos/logo.png"
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
      <Redirect to="/press" />
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
