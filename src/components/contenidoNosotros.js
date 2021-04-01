import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Contenido = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  p {
    line-height: 2;
  }
`;

const ContenidoNosotros = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            gatsbyImageData(sizes: "(min-width: 600px) 200px, 50vw")
          }
        }
      }
    }
  `);
  const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0];
  const images = withArtDirection(getImage(imagen.gatsbyImageData), [
    {
      media: "(min-width: 600px) and (max-width: 1200px)",
      image: getImage(imagen.gatsbyImageData),
    },
  ]);
  return (
    <>
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >
        {titulo}
      </h2>
      <Contenido>
        <p>{contenido}</p>
        <GatsbyImage
          //   image={imagen.gatsbyImageData}
          image={images}
          //   quality={95}
          //   formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          //   style={{ marginBottom: `1.45rem` }}
        />
      </Contenido>
    </>
  );
};

export default ContenidoNosotros;
