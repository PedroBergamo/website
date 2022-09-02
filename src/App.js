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

var Shop = "https://www.etsy.com/fi-en/shop/Visibilium"

function App() {
return (
    <HashRouter>
    <div className="header" id="myHeader">
    <h1 style={{textAlign:"center"}}>Pedro Bergamo</h1>
      <nav className="menu">
          <li className="menu_link"><Link className="menu_link" to=
          "/design">Design</Link></li>
           <li className="menu_link"><Link className="menu_link" to=
            "/music">Music</Link></li>
            <a className="menu_link" href={Shop} target="_blank" rel="noreferrer">Shop</a>
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
