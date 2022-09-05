import React from 'react';
import { slide as Menu } from 'react-burger-menu';


export default props => {
  return (
    <div className="menu">
    <Menu {...props}>
      <a className="menu_link" href="/">
        Design
      </a>

      <a className="menu_link" href="/laravel">
        Music
      </a>

      <a className="menu_link" href="/angular">
        Shop
      </a>
    </Menu>
    </div>
  );
};
