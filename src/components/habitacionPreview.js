import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import tw, {css} from 'twin.macro'

const Boton = tw(Link)`
  mt-8 p-4 bg-blue-500 w-full uppercase text-white text-center block cursor-pointer font-PT rounded-md
`


const HabitacionPreview = ({habitacion}) => {
  const {contenido, imagen, titulo, slug} = habitacion
  return (
    <div css={css`${tw`border border-gray-300 rounded-md mb-4`}`}>
      <GatsbyImage image={imagen.gatsbyImageData} alt="Habitacion"/>
      <div css={css`${tw`p-4`}`}>
        <h3 className="text-center text-3xl">{titulo}</h3>
        <p>{contenido}</p>
        <Boton to={slug}>Ver Habitacion</Boton>
      </div>
    </div>
    );
}
 
export default HabitacionPreview;