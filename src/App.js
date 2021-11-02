import React, {useEffect} from 'react';
import ReactGA from 'react-ga'
import Navigation from "./components/Navigation.js";
import Container from "./components/Container.js";
import Footer from "./components/Footer.js";

function App() {

useEffect(() => {
  ReactGA.initialize('UA-211790415-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
},[])

  return (
    <>
      <Navigation />
      <Container />
      <Footer />
    </>
  );
}

export default App;
