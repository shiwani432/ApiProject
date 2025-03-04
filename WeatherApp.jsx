import React, { useState } from 'react'
import SerchBox from './SerchBox'
import InfiBox from './InfiBox'

const WeatherApp = () => {
    
    const [weatherInfo,setWeatherInfo]= useState({
        city :"Delhi",
        feelsLike: 24.92,
        temp: 25.05,
        temp_min: 25.05,
        temp_max: 25.05,
        humidity: 50,
        weather: "haze"
    });

 let updateInfo = (NewInfo) => {
    setWeatherInfo(NewInfo);
 }

  return (
 
    <div style={{backgroundColor:"#4df7f7", width:"160%", marginLeft:"-80px", marginTop:"-50px"}}><br></br>
      <h2 style={{fontSize:"30px"}}>Welcome To The Weather App</h2>
      <SerchBox updateInfo={updateInfo}/>
      <InfiBox Info={weatherInfo}/>
    </div>
   
  )
}

export default WeatherApp


