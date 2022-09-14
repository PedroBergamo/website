import "./pages.css"
import Clients from "../components/Clients.js";

const Portifolio = () => {
  return(
    <div>
      <div className= "content">
          <h2>Symbols are powerful because they are visible signs of invisible realities</h2>
          <h2>-Saint Augustine</h2>
          <p style={{marginTop: "10%"}}>
          Pedro Bergamo is a visual artist, developer and musician based in Helsinki-Finland.
          After being the head of marketing with several brands while working as a creative director in Brazil, he moved to Europe
          to pursue a Ph.D. in modelling and simulation and UX design in Sweden. Right now he is based in Helsinki-Finland,
          helping other artists like him to find their own voice and their own colors in the digital world.
          </p>
      </div>
      <Clients/>
    </div>
    )
}

export default Portifolio;
