import "./pages.css"
import {Col} from "react-bootstrap";
import Elias1 from "../images/clients/elias/Elias-1.jpg"
import Elias2 from "../images/clients/elias/Elias-2.jpg"
import Elias3 from "../images/clients/elias/Elias-3.jpg"

import Inke1 from "../images/clients/inke/Inke-1.jpg"
import Inke2 from "../images/clients/inke/Inke-2.jpg"
import Inke3 from "../images/clients/inke/Inke-3.jpg"
import Inke4 from "../images/clients/inke/Inke-4.jpg"

import {Link} from "react-router-dom";
import Carousel  from 'nuka-carousel';
var EliasSite = "https://www.behance.net/gallery/138157413/Elias-Nieminen-Ensemble-Brand-Book";
var InkeSite = "https://www.behance.net/gallery/139109593/Inke-Launi-Brand-Book";

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
                <h3><a className="text_link" href={EliasSite} target="_blank" rel="noreferrer">Elias Brand Book</a></h3>
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
                <h3><a className="text_link" href={InkeSite} target="_blank" rel="noreferrer">Inke Launi Brand Book</a></h3>
            </div>

    </div>

    )
}

export default Portifolio;
