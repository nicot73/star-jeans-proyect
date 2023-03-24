import React, { useState, useEffect } from 'react';
//import ItemDetail from './ItemDetail';
//import ThumbsGalery from './ThumbsGalery';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection } from 'firebase/firestore';
import Loader from '../Loader/Loader';
import ImageSelector from './ImageSelector';

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { id } = useParams();

    useEffect(() => {

      const productCollection = collection(db, 'products');
      const refDoc = doc(productCollection, id);

      getDoc(refDoc)
      .then((result) => {
        setListProduct(
          {
            id: result.id,
            ...result.data()
          }
        )
      })
      .catch((error) => {
        console.error(error);
        setError('Lo sentimos, no encontramos ese producto.');
      })
      .finally(() => {
        setLoading(false);
      })
      
    },[id])

  return (
    <DetailContainer>
      {!loading ? <ImageSelector listProduct={listProduct}/> : <Loader/>}
    </DetailContainer>
  )
}

export default ItemDetailContainer;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`