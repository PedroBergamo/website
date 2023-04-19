import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";
import Music from "./pages/Music.js";
import Texts from "./pages/Texts.js";
import Photos from "./pages/photos.js";
import NotFound from "./pages/NotFound.js"
import MusicPage from "./pages/MusicPage.js";
import Bio from "./pages/Bio.js";
import {
      HashRouter, Switch, Route, Redirect
  } from 'react-router-dom';
import "./index.css"




function App() {
return (
    <HashRouter>
     <Menu/>

    <Switch>
    <Route exact path="/">
      <Redirect to="/Photos" />
    </Route>
    <Route path="/404" component={NotFound} />
    <Route path="/music/:id" render={props => <MusicPage {...props}/>} />
    <Route path="/Photos" component={Photos} />
    <Route path="/Bio" component={Bio} />
    <Route path="/music" exact>
      <Music />
    </Route>
    <Route path="/texts" exact>
      <Texts />
    </Route>


    </Switch>
    <Footer a id="f"/>
    </HashRouter>
  );
}

export default App;
