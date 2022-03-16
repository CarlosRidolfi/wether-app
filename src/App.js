import './App.scss';
import WeitherCard from './components/weitherCard'
import Navbar from './components/navBar'
import mock from '../src/services/mock'
import React from 'react'
import Cloudy from '../src/images/cloudy.jpg'
import Rainy from '../src/images/rainy.jpg'
import Sunny from '../src/images/sunny.jpg'
import F from '../src/images/f.png'
import C from '../src/images/c.png'
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'

const UnityCF = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;

  img{
    width: 70px;
    height: 70px;
  }
` 

const UnityMI = styled.p`
  cursor: pointer;
  margin-left: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  font-size: 1.4rem;
  font-family: HelveticaBold;
  color: white;
  background-color: #00B1C3;
  border-radius: 150px;

  @media screen and (max-width: 425px){
    margin-top: 20px;
  }
`

const Unitys = styled.div`
  display: flex;
  flex-direction: row;
`

const SearchBar = styled.div`
    width: 100%;
    height: 50px;
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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 425px){
    flex-direction: column;
  }
`

function App() {

  let weather = new Array();
  let weatherOsasco = new Array();
  let weatherSaoPaulo = new Array();
  weatherOsasco.push(...mock[0].weather)
  weatherSaoPaulo.push(...mock[1].weather)
  mock.map((data) => weather.push(...data.weather))

  const [time, setTime] = React.useState('')
  const [unitycf, setUnityCF] = React.useState(true)
  const [unitymi, setUnityMI] = React.useState(true)

  let date = new Date()
  let hour = date.getHours()
  
  console.log(date)

  React.useEffect(() => {
      if(hour >= 0 && hour <= 12){
          setTime('morning')
      }if(hour >= 12 && hour <= 18){
          setTime('evening')
      }if(hour >= 18 && hour <= 24){
          setTime('night')
      }
  }, [time])

  function searchPlace() {
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("states");
    li = ul.getElementsByClassName('card');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("span")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  return (
    <div className={`App ${time}`}>
      <Navbar />
      <Wrap>
        <SearchBar>
            <input type="text" placeholder="Digite o lugar" id="myInput" onKeyUp={searchPlace}/>
            <BsSearch style={{color : 'white'}}/>
        </SearchBar>
        <Unitys>
          <UnityCF onClick={() => {setUnityCF(!unitycf)}}>
            <img src={unitycf ? C : F}/>
          </UnityCF>
          <UnityMI onClick={() => {setUnityMI(!unitymi)}}>
            {unitymi ? 'MM' : 'INCH'}
          </UnityMI>
        </Unitys>
      </Wrap>
      <div id="states">
        {weatherOsasco.map((data, key) => <WeitherCard 
          href={"#"}
          class={"card"}
          name={"name"}
          key={key} 
          date={data.date} 
          text={data.text} 
          tempMax={unitycf ? data.temperature.max + `${unitycf ? ' °C' : ' °F'}` : Math.round(((data.temperature.max * 1.8) + 32)) + `${unitycf ? ' °C' : ' °F'}`} 
          tempMin={unitycf ? data.temperature.min + `${unitycf ? ' °C' : ' °F'}` : Math.round(((data.temperature.min * 1.8) + 32)) + `${unitycf ? ' °C' : ' °F'}`}
          precipitation={unitymi ?  data.rain.precipitation + `${unitymi ? ' mm' : ' inch'}` : Math.round((data.rain.precipitation * 25.4)) + `${unitymi ? ' mm' : ' inch'}`}
          probability={data.rain.probability}
          locale={'Osasco'}
          imageWeather = {(data.rain.probability >= 50) ? Rainy : (data.rain.probability < 50 && data.rain.probability >= 30) ? Cloudy : (data.rain.probability <= 30) ? Sunny : null}
        />)}
        {weatherSaoPaulo.map((data, key) => <WeitherCard 
          href={"#"}
          class={"card"}
          key={key} 
          date={data.date} 
          text={data.text} 
          tempMax={unitycf ? data.temperature.max + `${unitycf ? ' °C' : ' °F'}` : Math.round(((data.temperature.max * 1.8) + 32)) + `${unitycf ? ' °C' : ' °F'}`} 
          tempMin={unitycf ? data.temperature.min + `${unitycf ? ' °C' : ' °F'}` : Math.round(((data.temperature.min * 1.8) + 32)) + `${unitycf ? ' °C' : ' °F'}`}
          precipitation={unitymi ?  data.rain.precipitation + `${unitymi ? ' mm' : ' inch'}` : Math.round((data.rain.precipitation * 25.4)) + `${unitymi ? ' mm' : ' inch'}`}
          probability={data.rain.probability}
          locale={'São Paulo'}
          imageWeather = {(data.rain.probability >= 50) ? Rainy : (data.rain.probability < 50 && data.rain.probability >= 30) ? Cloudy : (data.rain.probability <= 30) ? Sunny : null}
        />)}
      </div>
    </div>
  );
}

export default App;
