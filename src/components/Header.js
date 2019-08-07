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
          <span className = "text-warning" >Better Bus App </span> 
           </NavbarBrand> 
           <NavbarToggler onclick = {() => {}}/> 
          <Collapse isOpen = {false}navbar >
          <Nav className = "ml-auto" navbar>
          {/* <NavItem>
               <NavLink href ="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
               <NavLink href ="https://github.com/reactstrap/reactstrap">
               Shipments
               </NavLink>
               
          </NavItem> */}
          <NavItem>
               <NavLink href ="/components/">Plan Your Trip</NavLink>
          </NavItem>
          <NavItem>
               <NavLink href ="https://github.com/reactstrap/reactstrap">
             Next Bus?
               </NavLink>
           </NavItem>
          </Nav> 
          </Collapse>
          </Navbar>

          </div>
     )
}

export default Header;
