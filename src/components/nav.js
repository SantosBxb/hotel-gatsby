import React from 'react'
import {Link} from 'gatsby'
import tw, {styled, css} from "twin.macro"

const Nav = tw.nav`
  flex justify-center pb-0
`
const active = css`
  &.active{
    ${tw`visited:text-blue-200 border-b`}
  }
`
const NavLink = styled(Link)([
  tw`text-white text-2xl font-bold font-PT p-4 mr-4 last:mr-0`, 
  active
])

const Navegacion = () => {


  return (
    <Nav>
      <NavLink 
        to={'/'}
        activeClassName="active"  
      >Inicio</NavLink>
      <NavLink 
        to={'/nosotros'}
        activeClassName="active"  
      >Nosotros</NavLink>
    </Nav>
  );
}
 
export default Navegacion;