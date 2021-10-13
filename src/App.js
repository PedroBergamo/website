import React from 'react';
import ReactGA from 'react-ga'
import Navigation from "./components/Navigation.js";
import Container from "./components/Container.js";
import Footer from "./components/Footer.js";


const TRACKING_ID = "G-W8BNQ6Q3SG";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <Navigation />
      <Container />
      <Footer />
    </>
  );
}

export default App;
