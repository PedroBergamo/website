import "./pages.css"
import {Col} from "react-bootstrap";
import Elias1 from "../images/clients/elias/Elias-1.jpg"
import {Link} from "react-router-dom";

const Portifolio = () => {
  return(
    <div className="client">
        <h1>Portifolio</h1>
        <p>Selection of clients I had the honor to work with</p>
        <h1>Elias Nieminen Ensemble</h1>
        <img src={Elias1} width="932" height="621" alt=""/>
        <p> lore ipsuloda aosd</p>
        <p>Link: behance/somewhere</p>
    </div>
    )
}

export default Portifolio;
