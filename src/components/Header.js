import React from 'react';
import {
     Navbar,
     Nav,
     NavItem,
     NavLink,
     NavbarBrand,
     NavbarToggler,
     Collapse
}
from "reactstrap";
function Header() {
     return(
          <div>
          <Navbar color = "dark" dark fixed="top" expand="sm">
          <NavbarBrand href ="/">
          <span className = "text-warning" > bight </span> 
           </NavbarBrand> 
           <NavbarToggler onclick = {() => {}}/> 
          <Collapse isOpen = {false}navbar >
          <Nav className = "ml-auto" navbar>
          <NavItem>
               <NavLink href ="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
               <NavLink href ="https://github.com/reactstrap/reactstrap">
               Shipments
               </NavLink>
          </NavItem>
          </Nav> 
          </Collapse>
          </Navbar>

          </div>
     )
}

export default Header;