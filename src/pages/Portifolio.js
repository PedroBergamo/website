import "./pages.css"
import {Col} from "react-bootstrap";
import Elias1 from "../images/clients/elias/Elias-1.jpg"
import Elias2 from "../images/clients/elias/Elias-2.jpg"
import Elias3 from "../images/clients/elias/Elias-3.jpg"

import Inke1 from "../images/clients/inke/Inke-1.jpg"
import Inke2 from "../images/clients/inke/Inke-2.jpg"
import Inke3 from "../images/clients/inke/Inke-3.jpg"
import Inke4 from "../images/clients/inke/Inke-4.jpg"


import Everfrost1 from "../images/clients/everfrost/everfrost-1.jpg"
import Everfrost2 from "../images/clients/everfrost/everfrost-2.jpg"
import Everfrost3 from "../images/clients/everfrost/everfrost-3.jpg"


import Minfloat1 from "../images/clients/minfloat/MinFloat-1.jpg"
import Minfloat2 from "../images/clients/minfloat/MinFloat-2.jpg"

import {Link} from "react-router-dom";
import Carousel  from 'nuka-carousel';
var EliasSite = "https://www.behance.net/gallery/138157413/Elias-Nieminen-Ensemble-Brand-Book";
var InkeSite = "https://www.behance.net/gallery/139109593/Inke-Launi-Brand-Book";
var EverFrostSite = "https://www.behance.net/gallery/138884997/Everfrost-Brand-Book";
var MinfloatSite = "http://flotation-simulator.com";

const Portifolio = () => {
  return(
    <div className= "content">
        <h1>Design</h1>
        <p>Selection of clients I had the honor to work with</p>
            <div className="client">
                <h3>Brand Design</h3>
                <h1>Elias Nieminen Ensemble</h1>
                <div >
                <Carousel className="carousel"
                  defaultControlsConfig={{
                    nextButtonText: '>',
                    prevButtonText: '<',
                    pagingDotsStyle: {
                      fill: 'Black'
                    }
                  }}>
                    <img src={Elias1} />
                    <img src={Elias2} />
                    <img src={Elias3} />
                  </Carousel>
            </div>
                <h3> Elias Nieminen Ensemble is a genre-crossing project led by the young Finnish drummer-composer Elias Nieminen.
                For his brand, the composer wanted a sober, sensitive but yet energetic visual representation.</h3>
                <h3>Link: <a className="text_link" href={EliasSite} target="_blank" rel="noreferrer">Elias Brand Book</a></h3>
            </div>
            <div className="client">
                <h3>Brand Design</h3>
                <h1>Inke Launi</h1>
                <div >
                <Carousel className="carousel"
                  defaultControlsConfig={{
                    nextButtonText: '>',
                    prevButtonText: '<',
                    pagingDotsStyle: {
                      fill: 'Black'
                    }
                  }}>
                    <img src={Inke1} />
                    <img src={Inke2} />
                    <img src={Inke3} />
                    <img src={Inke4} />
                  </Carousel>
            </div>
                <h3> Inke Launi is an alternative rock band led by the Finnish composer Elina Launimaa. Her brand paints the singer as a voice for the misfits
                without ignoring her feminine self.</h3>
                <h3>Link: <a className="text_link" href={InkeSite} target="_blank" rel="noreferrer">Inke Launi Brand Book</a></h3>
            </div>

            <div className="client">
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
                    <img src={Everfrost1} />
                    <img src={Everfrost2} />
                    <img src={Everfrost3} />
                  </Carousel>
            </div>
                <h3> Everfrost is a modern power metal band from Finland. For their re-branding, the band was looking for something powerful but psychologically intriguing.</h3>
                <h3>Link: <a className="text_link" href={EverFrostSite} target="_blank" rel="noreferrer">EverFrost Brand Book</a></h3>
            </div>

            <div className="client">
                <h3>UX/UI Design</h3>
                <h1>MinFloat</h1>
                <div >
                <Carousel className="carousel"
                  defaultControlsConfig={{
                    nextButtonText: '>',
                    prevButtonText: '<',
                    pagingDotsStyle: {
                      fill: 'Black'
                    }
                  }}>
                    <img src={Minfloat1} />
                    <img src={Minfloat2} />
                  </Carousel>
            </div>
                <h3> Minfloat is an educational game which teaches performance calculations related to Froth Flotation.
                For their UI, I tried to combine a futuristic user interface with patent-resembling elements</h3>
                <h3>Link: <a className="text_link" href={MinfloatSite} target="_blank" rel="noreferrer">Minfloat</a></h3>
            </div>
    </div>

    )
}

export default Portifolio;
