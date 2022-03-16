import React from 'react'
import styled from 'styled-components'
import Logo from '../../images/logo.png'
import {BsSearch} from 'react-icons/bs';
import DayTime from '../dayTime';

const NavbarDiv = styled.div`
    position: relative;
    z-index: 9999;
    top: 0;
    width: 100%;
    height: 100px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img{
        height: 50px;
        margin-top: 20px;
        padding: 5px;
    }

    @media screen and (max-width: 992px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: none;
        margin-top: 100px;
        position: relative;

        img{
            margin-right: 0;
        }
    }
`
const SearchBar = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 20px;
    display: flex;
    border-bottom-style: solid;
    border-width: 1px;
    border-color: white;
    justify-content: center;
    align-items: center;
    max-width: 300px;

    input{
        border: none;
        background: none;
        font-size: 20px;
        padding: 5px;
        width: 100%;
    }

    input::placeholder{
        color: white;
    }

    input:focus{
        outline: none;
    }

    @media screen and (max-width: 768px){
        margin-right: 0;
    }
`

const Day = styled.p`
    font-size: 2rem;
    color: white;
    font-family: Helvetica;
`

export default function Navbar(){
    let data = new Date();
    let dataFormatada = ("0" + data.getDate()).substr(-2) + "/" 
        + ("0" + (data.getMonth() + 1)).substr(-2) + "/" + data.getFullYear();

    return(
        <NavbarDiv id="nav">
            <img src={Logo} />
            <DayTime />
        </NavbarDiv>
    )
}