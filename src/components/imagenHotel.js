import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`;
const TextoImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.8),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
    margin: 0;
    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }
  p {
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`;

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  // console.log(image);
  return (
    <div>
      <ImageBackground tag="section" fluid={image.sharp.fluid}>
        <TextoImagen>
          <h1>Bienvenido a Hotel Gatsby</h1>
          <p>El mejor hotel para tus vacaciones</p>
        </TextoImagen>
      </ImageBackground>
    </div>
  );
};

export default ImagenHotel;

// <StaticImage
//      src="../images/gatsby-astronaut.png"
//      width={300}
//      quality={95}
//      formats={["AUTO", "WEBP", "AVIF"]}
//      alt="A Gatsby astronaut"
//      style={{ marginBottom: `1.45rem` }}
//    />
