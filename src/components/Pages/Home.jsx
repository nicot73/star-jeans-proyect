import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemCarousel from '../Carousel/ItemCarousel';
import styled from 'styled-components';

const Home = () => {
  
  return (
    <HomeContainer>
      <ItemCarousel/>
      <h1>¡NUEVOS PRODUCTOS EN STOCK!</h1>
      <ItemListContainer/>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  text-align: center;
  h1 {
    padding-top: 25px;
    color: #888;
  }
`