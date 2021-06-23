import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import tw, {styled} from 'twin.macro'

const ImgBG = styled(BackgroundImage)`
  height: 700px;
`
const TextImage = styled.div`
  ${tw`flex flex-col flex-1 items-center justify-center text-white bg-gradient-to-t from-gray-900 h-full`};
  h1{
    ${tw`text-6xl m-0 text-center font-PT`}
  }
  p{
    ${tw`text-2xl lg:text-3xl font-RB text-center`}
  }

`  

const ImagenHotel = () => {

  const {image } = useStaticQuery(graphql`
  query {
    image: file(relativePath: {eq: "8.jpg"}){
      sharp: childImageSharp{
        fluid { 
          ...GatsbyImageSharpFluid_withWebp 
        }
      }
    }
  }
  `)

  return (  
    <ImgBG tag="section" fluid={image.sharp.fluid} fadeIn='soft'>
      <TextImage>
        <h1>Bienvenido al Hotel Gatsby</h1>
        <p>El mejor para tus vacaciones</p>
      </TextImage>

    </ImgBG>
  );
}
 
export default ImagenHotel;