import React from 'react';
import ReactGA from 'react-ga'
import Navigation from "./components/Navigation.js";
import Container from "./components/Container.js";
import Footer from "./components/Footer.js";


const TRACKING_ID = "289719360";
ReactGA.initialize(TRACKING_ID, {
debug: true,
titleCase: false,
gaOptions: {
userId: 210077702,
},
});
ReactGA.pageview(window.location.pathname + window.location.search);

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
