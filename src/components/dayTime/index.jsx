import React from 'react'
import styled from 'styled-components'
import Sunrise from '../../images/sun.png'
import Sunset from '../../images/sunset.png'
import Moon from '../../images/moon.png'

const TimeDay = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    max-width: 320px;

    .daytime{
        width: 80px;
        height: 80px;
        -webkit-animation:spin 4s linear infinite;
        -moz-animation:spin 4s linear infinite;
        animation:spin 4s linear infinite;

        @-moz-keyframes spin { 
            100% { -moz-transform: rotate(360deg); } 
        }
        @-webkit-keyframes spin { 
            100% { -webkit-transform: rotate(360deg); } 
        }
        @keyframes spin { 
            100% { 
                -webkit-transform: rotate(360deg); 
                transform:rotate(360deg); 
            } 
        }
    }   

    hr{
        transform: rotate(90deg);
        margin-top: 30px;
    }
`

export default function DayTime(){

    const [time, setTime] = React.useState('')
    let date = new Date()
    let hour = date.getHours()

    React.useEffect(() => {
        if(hour >= 0 && hour <= 12){
            setTime(Sunrise)
        }if(hour >= 12 && hour <= 18){
            setTime(Sunset)
        }if(hour >= 18 && hour <= 24){
            setTime(Moon)
        }
    }, [time])
    return(
        <TimeDay>
            <hr />
                <img className="daytime" src={time} />
            <hr />
        </TimeDay>
    )
}