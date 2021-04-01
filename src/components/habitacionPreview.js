import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  transition: background-color 300ms ease;
  &:hover {
    background-color: rgba(44, 62, 80, 1);
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 6px;
  /* border: 1px solid #e1e1e1; */
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.06);
`;
const CardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
`;

const HabitacionPreview = ({ habitacion }) => {
  const { contenido, imagen, titulo, slug } = habitacion;
  const images = withArtDirection(getImage(imagen.gatsbyImageData), [
    {
      media: "(min-width: 600px) and (max-width: 1200px)",
      image: getImage(imagen.gatsbyImageData),
    },
  ]);

  return (
    <Card>
      <GatsbyImage
        image={images}
        alt="Habitaciones"
        style={{
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
      />
      <CardBody>
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {titulo}
        </h3>
        <p>{contenido}</p>

        <Boton to={slug}>Ver Habitación</Boton>
      </CardBody>
    </Card>
  );
};

export default HabitacionPreview;
