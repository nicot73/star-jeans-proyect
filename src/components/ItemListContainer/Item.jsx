import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Item = ({ product }) => {

  return (
    <CardContainer>
      <NavLink to={`/product/${product.id}`}>
      <img src={product.image[0]} alt="img" />
      <div className='titleContainer'>
        <h4>{product.title}</h4>
      </div>
      <button>VER DETALLES</button>
      </NavLink>
    </CardContainer> 
  )
}

export default Item;

const CardContainer = styled.div`
  background-color: white;
  margin: 30px 15px;
  width: 260px;
  height: 395px;
  border-radius: 1px;
  text-align: center;
  transition: all 0.25s;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
  a {
    text-decoration: none !important;
    color: #24262B !important;
  }
  img {
    width: 230px;
    height: 320px;
  }
  .titleContainer{
    height: 55px;
  }
  h4 {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 0;
    padding: 15px 10px;
  }
  p {
    font-size: 15px;
    padding-bottom: 8px;
    margin-bottom: 10px;
  }
  button {
    font-weight: 400;
    font-size: 12px;
    text-decoration: none;
    color: #BBBBBB;
    background-color: #24262B;
    padding: 8px;
    border: none;
  }
  button:hover {
    color: #F9F9F9;
    background-color: #24262B;
  }
`