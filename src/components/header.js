import { Link } from 'gatsby'
import React from 'react'
import tw from "twin.macro"
import Navegacion from './nav'

const Headerp = tw.header`
  bg-gray-800 p-4
`
const Container = tw.div`
  max-w-screen-lg mx-auto my-0 md:flex md:items-center md:justify-between 
`
const Title = tw(Link)`
  text-white font-PT text-5xl font-bold hover:text-blue-200
`

const Header = () => {
  return (
    <Headerp>
      <Container >
        <Title to={"/"}>Hotel Gatsby</Title>
        <Navegacion/>
      </Container>
    </Headerp>
  );
}
 
export default Header;