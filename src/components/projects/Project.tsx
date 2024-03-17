import { Link } from "react-router-dom";
import styled from "styled-components";

interface ProjectProps {
  link: string;
  image: string;
  title: string;
  description: string;
}

const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  max-width: 300px;
  background: ${({ theme }) => theme.background.secondary};
  box-shadow: ${({ theme }) => theme.card.boxShadow};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 300px;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  
`;

export const Project = ({ link, image, title, description }: ProjectProps) => {
  return (
    <>
      <CardLink to={link}>
        <CardImage width="300px" src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </CardLink>
    </>
  );
};
