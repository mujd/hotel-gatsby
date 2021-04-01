import { useStaticQuery, graphql } from "gatsby";

const useHabitaciones = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          contenido
          id
          slug
          imagen {
            gatsbyImageData(sizes: "(min-width: 600px) and (max-width: 1200px)")
          }
        }
      }
    }
  `);
  return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
    id: habitacion.id,
    titulo: habitacion.titulo,
    contenido: habitacion.contenido,
    imagen: habitacion.imagen,
    slug: habitacion.slug,
  }));
};

export default useHabitaciones;
