import React from "react";
import styled from "styled-components";
import { SlCursor  } from 'react-icons/sl';
const ProductCard = ({ image, title, buttonColor }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Span style={{width:"100%"}}>
      <Details>
        <Title>{title}</Title>
        <Button buttonColor={buttonColor}>
          Buy Now &nbsp;<SlCursor />
        </Button>
      </Details>
      </Span>
    </Card>
  );
};

export default ProductCard;

// Styled Components
const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  max-width: 300px;
`;

const Span = styled.div`
 display:flex;
 padding:13px;
   font-size: 1rem;
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;


const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: ${(props) => props.buttonColor || "#0077b6"};
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  display: flex; /* Align icon and text horizontally */
  align-items: center; /* Center icon vertically */
  
  &:hover {
    background-color: #929292; /* Darker shade for hover effect */
    transition: background-color ease-in-out .3s; 
    transform scale
`