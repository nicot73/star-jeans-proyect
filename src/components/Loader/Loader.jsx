import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderContainer>
        <div className='loader'></div>
        <p className='message'>CARGANDO</p>
    </LoaderContainer>
  )
}

export default Loader;

const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 15px;
    .loader {
        width: 100px;
        height: 100px;
        border: solid 5px #F9F9F9;
        border-top: solid 5px #333;
        border-radius: 50%;
        animation: loader .8s linear infinite;
    }
    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -55%);
        animation: message 1s alternate infinite ease-in-out;
        color: #333;
    }
    @keyframes message {
        0% {
            opacity: .2;
        }
        100% {
            opacity: 1;
        }
    }
    p {
        font-weight: 500;
    }
`