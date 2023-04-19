import {Col} from "react-bootstrap";
import {
     Link
  } from 'react-router-dom';

var BC = "http://bergamocreations.com/"
var Shop = "https://www.etsy.com/fi-en/shop/Visibilium"



const Links = () => {
  return(
    <div>
    <Col xs={12} md={4} lg={3} className="d-none d-lg-block" >
      <li onClick={() => this.closeMenu()}><Link className="menu_link" to=
     "/music">Music</Link></li>
        <a onClick={() => this.closeMenu()} className="menu_link" href={BC} target="_blank" rel="noreferrer">Photos</a>
        <a onClick={() => this.closeMenu()} className="menu_link" href={Shop} target="_blank" rel="noreferrer">Shop</a>
    <li onClick={() => this.closeMenu()}><Link className="menu_link" to=
         "/bio">Bio</Link></li>
    </Col>

    </div>

  )
}

export default Links;
