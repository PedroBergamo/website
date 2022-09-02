import "./pages.css"
import Elias1 from "../images/clients/elias/Elias-1.jpg"
import Elias2 from "../images/clients/elias/Elias-2.jpg"
import Elias3 from "../images/clients/elias/Elias-3.jpg"

import Inke1 from "../images/clients/inke/Inke-1.jpg"
import Inke2 from "../images/clients/inke/Inke-2.jpg"
import Inke4 from "../images/clients/inke/Inke-4.jpg"
import Inke5 from "../images/clients/inke/Inke-5.jpg"


import Everfrost1 from "../images/clients/everfrost/everfrost-1.jpg"
import Everfrost2 from "../images/clients/everfrost/everfrost-2.jpg"
import Everfrost3 from "../images/clients/everfrost/everfrost-3.jpg"


import Minfloat1 from "../images/clients/minfloat/MinFloat-1.jpg"

import Carousel  from 'nuka-carousel';
var EliasSite = "https://www.behance.net/gallery/138157413/Elias-Nieminen-Ensemble-Brand-Book";
var InkeSite = "https://www.behance.net/gallery/139109593/Inke-Launi-Brand-Book";
var EverFrostSite = "https://www.behance.net/gallery/138884997/Everfrost-Brand-Book";
var MinfloatSite = "http://flotation-simulator.com";

const Portifolio = () => {
  return(
    <div>
      <div className= "content">
          <h1>Symbols are powerful because they are visible signs of invisible realities.</h1>
          <h1>-Saint Augustine</h1>
          <p style={{marginTop: "20%"}}>
          Pedro Bergamo is a visual artist, developer and musician based in Helsinki-Finland.
          After dealing with several brands while working as a creative director in Brazil, he enrolled
          in a Ph.D. in  modelling and simulation and UX design in Sweden. Right now he is based in Helsinki, where
          helping other artists like him to find their own voice and their own colors in the digital world.
          </p>
      </div>
    <div className="client elias whitefont">
      <h3>Brand Design</h3>
        <h1>Elias Nieminen Ensemble</h1>
                <div >
                <Carousel className="carousel"
                  defaultControlsConfig={{
                    nextButtonText: '>',
                    prevButtonText: '<',
                    pagingDotsStyle: {
                      fill: 'white'
                    }
                  }}>
                    <img src={Elias1} width="100%" alt=""/>
                    <img src={Elias2} width="100%" alt=""/>
                    <img src={Elias3} width="100%" alt=""/>
                  </Carousel>
                  </div>
                <h3> Elias Nieminen Ensemble is a genre-crossing project led by the young Finnish drummer-composer Elias Nieminen.
                For his brand, the composer wanted a sober, sensitive yet energetic visual representation.</h3>
                <h3>Link: <a className="text_link" href={EliasSite} target="_blank" rel="noreferrer">Elias Brand Book</a></h3>
            </div>
            <div className="client inke whitefont">
                <h3>Brand Design</h3>
                <h1>Inke Launi</h1>
                <div >
                <Carousel className="carousel"
                  defaultControlsConfig={{
                    nextButtonText: '>',
                    prevButtonText: '<',
                    pagingDotsStyle: {
                      fill: 'white'
                    }
                  }}>
                    <img src={Inke1} width="100%" alt=""/>
                    <img src={Inke2} width="100%" alt=""/>
                    <img src={Inke4} width="100%" alt=""/>
                    <img src={Inke5} width="100%" alt=""/>
                  </Carousel>
            </div>
                <h3> Inke Launi is a Finnish alternative rock band led by the
                singer-songwriter Elina Launimaa. Her nature-inspired brand aims to be a voice for melancholic souls.</h3>
                <h3>Link: <a className="text_link" href={InkeSite} target="_blank" rel="noreferrer">Inke Launi Brand Book</a></h3>
            </div>

            <div className="client everfrost">
                <h3>Brand Design</h3>
                <h1>EverFrost</h1>
                <div >
                <Carousel className="carousel"
                  defaultControlsConfig={{
                    nextButtonText: '>',
                    prevButtonText: '<',
                    pagingDotsStyle: {
                      fill: 'Black'
                    }
                  }}>
                    <img src={Everfrost1} width="100%" alt=""/>
                    <img src={Everfrost2} width="100%" alt=""/>
                    <img src={Everfrost3} width="100%" alt=""/>
                  </Carousel>
            </div>
                <h3> Everfrost is a modern power metal band from Finland. For their re-branding,
                the band was looking for something powerful but psychologically intriguing.</h3>
                <h3>Link: <a className="text_link" href={EverFrostSite} target="_blank" rel="noreferrer">EverFrost Brand Book</a></h3>
            </div>

            <div className="client minfloat whitefont">
                <h3>UX/UI Design</h3>
                <h1>MinFloat</h1>
                <div >
                    <img src={Minfloat1} width="100%" alt=""/>
            </div>
                <h3> Minfloat is an educational game which teaches performance calculations related to Froth Flotation.
                For their UI, I created a futuristic user interface with patent-resembling elements.</h3>
                <h3>Link: <a className="text_link" href={MinfloatSite} target="_blank" rel="noreferrer">Minfloat</a></h3>
            </div>

          <div className="client video whitefont">
            <h3>Music Video </h3>
            <h1>Pedro Bergamo - Imigrante</h1>

            <iframe width="450" height="300" src="https://www.youtube.com/embed/OgFXGCQHIac"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"></iframe>

            <h3> Music video made using Premiere Pro's mirror effects.</h3>
          </div>
    </div>
    )
}

export default Portifolio;
