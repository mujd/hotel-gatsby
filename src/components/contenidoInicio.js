import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TextoInicio = styled.div`
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

const ContenidoInicio = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            # fluid {
            #   ...GatsbyDatoCmsFluid
            # }
            gatsbyImageData
            # gatsbyImageData(
            #   width: 600
            #   placeholder: BLURRED
            # #   forceBlurhash: false
            # #   imgixParams: { invert: true }
            # )
          }
        }
      }
    }
  `);
  const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];

  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>
      <TextoInicio>
        <p>{contenido}</p>
        <GatsbyImage
          image={imagen.gatsbyImageData}
          //   quality={95}
          //   formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          //   style={{ marginBottom: `1.45rem` }}
        />
      </TextoInicio>
    </>
  );
};

export default ContenidoInicio;
