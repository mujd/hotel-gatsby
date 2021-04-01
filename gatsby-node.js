const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const habitacionTemplate = path.resolve(`./src/components/habitaciones.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query {
        allDatoCmsHabitacion {
          nodes {
            slug
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    const habitaciones = result.data.allDatoCmsHabitacion.nodes;
    // Create blog post pages.
    habitaciones.forEach(habitacion => {
      createPage({
        // Path for this page — required
        path: `${habitacion.slug}`,
        component: habitacionTemplate,
        context: {
          slug: habitacion.slug,
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      });
    });
  });
};
// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const resultado = await graphql(`
//     query {
//       allDatoCmsHabitacion {
//         nodes {
//           slug
//         }
//       }
//     }
//   `);

// //   console.log(resultado.data.allDatoCmsHabitacion.nodes);

//   if (resultado.errors) {
//     reporter.panic("No hubo resultados ", resultado.errors);
//   }

//   // Si hay paginas, crear los archivos
//   const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;
  
//   habitaciones?.foreach(habitacion => {
//     actions.createPage({
//       path: habitacion.slug,
//       component: require.resolve("./src/components/habitaciones.js"),
//       context: {
//         slug: habitacion.slug,
//       },
//     });
//   });
// };
