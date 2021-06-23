import { Link } from 'gatsby'
import React from 'react'
import tw from "twin.macro"
import Navegacion from './nav'

const Footerp = tw.footer`
  bg-gray-900 p-4
`
const Container = tw.div`
  max-w-screen-lg mx-auto my-0 md:flex md:items-center md:justify-between 
`
const Title = tw(Link)`
  text-white font-PT text-5xl font-bold hover:text-blue-200
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
    <Footerp>
      <Container >
        <Navegacion/>
        <Title to={"/"}>Hotel Gatsby</Title>
      </Container>
    </Footerp>
    <p className="text-center bg-gray-400">Hotel Gatsby. Todos los derechos Reservados {year} &copy;</p>
    </>
  );
}
 
export default Footer;