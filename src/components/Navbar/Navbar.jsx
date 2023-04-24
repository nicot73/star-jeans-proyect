import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import BurgerButton from './BurgerButton/BurgerButton';
import BlackLogoStarJeans from '../../assets/BlackLogo-StarJeans.svg';

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <>
            <NavContainer>
                <NavLink to={'/'} onClick={handleClick}><Logotype src={BlackLogoStarJeans}/></NavLink>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <NavLink onClick={handleClick} to={'/category/men'}><span className='isActive'>HOMBRE</span></NavLink>
                    <NavLink onClick={handleClick} to={'/category/women'}><span className='isActive'>DAMA</span></NavLink>
                    <NavLink onClick={handleClick} to={'/about-us'}><span className='isActive'>NOSOTROS</span></NavLink>
                    <NavLink onClick={handleClick} to={'/contact-us'}><span className='isActive'>CONTACTO</span></NavLink>
                    <NavLink onClick={handleClick} to={'/wholesale-contact'}><span className='isActive'>MAYORISTA</span></NavLink>
                </div>
                
                <div className='burger'>
                    <BurgerButton clicked={clicked} handleClick={handleClick}/>
                </div>

                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
        </>    
    )
}

export default Navbar;

const NavContainer = styled.nav`
    position: sticky;
    top: 0;
    padding: .5rem;
    background-color: #F9F9F9;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    z-index: 1;
    a {
        text-decoration: none;
        color: #333;
        @media (min-width: 768px){
            margin-right: 1rem;
        }
    }
    span:hover {
        border-bottom: solid 4px #333;  
    }
    a.active .isActive {
        color: #333;
        border-bottom: solid 4px #333;
    }
    @media (min-width: 768px) {
        div {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
        }
    }
    @media (min-width: 815px) {
        div :nth-child(1) {
            margin-left: 1rem;
        }
    }
    .links {
        position: absolute;
        top: -700px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .6s ease;
        a {
            color: #333;
            font-size: 2rem;
            display: block;
        }
        @media (min-width: 768px) {
            position: initial;
            margin: 0;
            a {
                font-size: 1rem;
                color: #333;
                display: inline;
            }

        }
    }
    @media (max-width: 768px) {
        .links.active{
            width: 100%;
            display: block;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            top: 70%;
            left: 0;
            right:0;
            text-align: center;
            z-index: 2;
            a {
                font-size: 1.5rem;
                color: #333;
                margin-top: 2.2rem;
            }
        }
    }
    .burger {
        z-index: 2;
        @media(min-width: 768px) {
            display: none;
        }
    }
`

const BgDiv = styled.div`
    background-color: #F9F9F9;
    position: fixed;
    top: -1000px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: all .6s ease;
    
    @media(max-width: 768px) {
        &.active {
            position: fixed;
            background-color: #F9F9F9;
            left: 0;
            top: 60px;
            width: 100%;
            height: 100%;
            z-index: 1;
        } 
    }
`

const Logotype = styled.img`
    margin: 0;
    padding: 0;
    width: 180px;
    height: auto;
`