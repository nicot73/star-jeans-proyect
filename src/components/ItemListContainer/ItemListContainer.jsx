import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import Loader from '../Loader/Loader';
import imageMen from '../../assets/headerMen.png';
import imageWomen from '../../assets/headerWomen.png';

const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  let { category } = useParams();

  useEffect(() => {

    const productsCollection = collection(db, 'products');
    const productCategory = query(productsCollection, where('category', '==', `${category}`));
    const productNew = query(productsCollection, where('antiquity', '==', 'new'));

    let url = (category === undefined ? productNew : productCategory)

    getDocs(url)
    .then((data) => {

      const list = data.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setListProducts(list);
    })
    .catch((error) => {
      console.error(error);
      setError('Lo sentimos, no encontramos ese producto.');
    })
    .finally(() => {
      setLoading(false);
    })

  },[category])

  return (
    <>
      <HeaderContainer>
        {category === 'men' && <img src={imageMen} alt="Image1" className='headerImg' />}
        {category === 'women' && <img src={imageWomen} alt="Image2" className='headerImg' />}
      </HeaderContainer>
      <DivContainer>
        {loading ? <Loader/> : <ItemList listProducts={listProducts}/>}
      </DivContainer>
    </>
  )
}

export default ItemListContainer;

const DivContainer = styled.div`
  padding: 30px 20px 45px ;
`
const HeaderContainer = styled.div`
  margin: 0;
  padding: 0;
  .headerImg {
    max-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`