import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import tw, {styled} from 'twin.macro'

const TextoInicio = tw.div`
  mt-16 max-w-7xl w-11/12 my-0 mx-auto md:(grid grid-cols-2 gap-8)
`
const  ContenidoInicio= () => {
  const informacion = useStaticQuery( graphql`
  query {
    allDatoCmsPagina(filter:{ slug: {eq:"inicio"}}){
      nodes {
        titulo
        contenido
        imagen {
          gatsbyImageData
        }
        }
      }
    }
  `)
  
  const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0]
  return ( 
    <>
      <h2 className='text-center text-6xl mt-16  mb-4 md:mb-16 '>{titulo}</h2>
      <TextoInicio>
        <p className='flex self-center mb-2'>{contenido}</p>
        <GatsbyImage image={imagen.gatsbyImageData} alt="Inicio"/>
      </TextoInicio>
    </>
  );
}

export default ContenidoInicio;