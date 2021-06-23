import React from 'react'
import { graphql} from 'gatsby';
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image';

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsHabitacion(filter: {slug:{eq: $slug}}) {
      nodes {
        titulo
        contenido
        imagen {
          gatsbyImageData(
            width:1200
          )
        }
      }
    }
  }
`



const HabitacionTemplate = ({data: {allDatoCmsHabitacion: {nodes}}}) => {
  const {titulo, contenido, imagen} = nodes[0]
  return (
    <Layout>
    <main className="mx-auto max-w-screen-xl w-11/12">
      <h1 className="text-center text-4xl mt-12  mb-4 md:mb-16">{titulo}</h1>
      <p>{contenido}</p>

      <GatsbyImage image={imagen.gatsbyImageData} alt="habitacion"/>
    </main>
    </Layout>
  );
}
 
export default HabitacionTemplate;