import React from "react";
import styled from 'styled-components'
import {RiUmbrellaFill} from 'react-icons/ri';
import {ImDroplet} from 'react-icons/im';
import {BsArrowUp} from 'react-icons/bs';
import {BsArrowDown} from 'react-icons/bs';


const CardContainer = styled.div`
    margin: 20px;
    width: 100%;
    max-width: 400px;
    height: 550px;
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CardBackground = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: .6;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 2px 3px 12px 3px rgba(0,0,0,0.86);
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 100%;
    margin-top: 180px;
    font-family: Helvetica;
    font-weight: 600;
`

const DayLocale = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255,255,255,.25);
`

const Day = styled.p`
    color: white;
    font-size: 30px;
    padding: 8px;
    margin: 0;

    @media screen and (max-width: 425px){
        font-size: 23px;
    }
`

const Locale = styled.span`
    color: white;
    font-size: 30px;
    padding: 8px;
    margin: 0;

    @media screen and (max-width: 425px){
        font-size: 23px;
    }
`

const Situation = styled.p`
    color: white;
    font-size: 20px;
    padding: 8px;
    margin: 0;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
`

const Rain = styled.div`
    display: flex;
    flex-direction: row;
`

const Degrees = styled.div`
    display: flex;
    flex-direction: row;
`

const Degree = styled.p`
    color: white;
    font-size: 2.5rem;
    margin: 1rem;
    font-family: HelveticaBold;

    @media screen and (max-width: 425px){
        font-size: 1.6rem;
        text-align: center;
    }
`

const Rains = styled.p`
    color: white;
    font-size: 2.3rem;
    margin: 1rem;
    font-family: HelveticaBold;

    @media screen and (max-width: 425px){
        font-size: 1.3rem;
        text-align: center;
    }
`

export default function WeitherCard(props){
    return(
        <CardContainer className={props.class}>
            <CardBackground  style={{background : `url(${props.imageWeather}) center center`}}/>
            <Info>
                <Degrees>
                    <Degree><BsArrowUp style={{color : '#0DDFFF'}} /> {props.tempMin}</Degree>
                    <Degree><BsArrowDown style={{color : '#C20000'}}/> {props.tempMax}</Degree>
                </Degrees>
                <Rain>
                    <Rains><ImDroplet/> {props.precipitation}</Rains>
                    <Rains><RiUmbrellaFill/> {props.probability} %</Rains>
                </Rain>
            </Info>
            <Description>
                <DayLocale>
                    <Day>{props.date}</Day>
                    <Locale className={props.name}>{props.locale}</Locale>
                </DayLocale>
                <Situation>{props.text}</Situation>
            </Description>
        </CardContainer>
    )
}