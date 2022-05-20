import "./pages.css"
import {Col} from "react-bootstrap";
import Photo from "../images/Photos/Pedro_candle.jpg"
import {Link} from "react-router-dom";

const Portifolio = () => {
  return(
    <div className="col_content">
        <h1>Portifolio</h1>
        <p>Selection of clients I had the honor to work with</p>
        <h1>Elias Nieminen Ensemble</h1>
        <img src={Photo} width="932" height="621" alt=""/>
        <p> lore ipsuloda aosd</p>
        <p>Link: behance/somewhere</p>

        </div>
    )
}

export default Portifolio;
