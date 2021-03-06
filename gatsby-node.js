exports.createPages = async ({actions, graphql, reporter}) => {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)
  if(resultado.error) {
    reporter.panic("No huno resultados", resultado.errors);
  }

  // si hay paginas crear los archivos 
  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;
  habitaciones.forEach( habitacion => {
    actions.createPage({
      path:habitacion.slug,
      component:require.resolve('./src/components/habitaciones.js'),
      context:{
        slug: habitacion.slug
      }
    })
  })


}