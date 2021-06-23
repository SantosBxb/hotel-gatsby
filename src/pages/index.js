import * as React from "react"
import ContenidoInicio from "../components/contenidoInicio"
import ImagenHotel from "../components/imagenHotel"
import Layout from "../components/layout"
import useHabitaciones from "../hooks/useHabitaciones"
import tw, {css} from "twin.macro"
import HabitacionPreview from "../components/habitacionPreview"

const Listado = tw.ul`
  max-w-screen-xl w-11/12 mt-16 mx-auto md:(grid grid-cols-3 gap-12)
`

const IndexPage = () => {
  const habitaciones = useHabitaciones()

  return (
    <Layout>
    <ImagenHotel/>
    <ContenidoInicio/>

    <h2 css={css`${tw`text-center mt-20 text-5xl`}`}>Nuestras Habitaciones</h2>
    <Listado>
      {habitaciones.map(habitacion => (
        <HabitacionPreview 
          key={habitacion.id}
          habitacion={habitacion}
        />
      ))}
    </Listado>
    </Layout>
  )
}

export default IndexPage
