import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SerchBox = ({updateInfo}) => {
  
  let [city, setCity] = useState("")
  let [error, setErroe] = useState(false)

  
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KAY ='227c967c9a4e91d8c9b0f3bd4c083ff8'

  let getWeatherInfo = async ()=>{
    try{
    
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KAY}&units=metric`)
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      
    let result = {
      city:city,
      temp: jsonResponse.main.temp,
      temp_min: jsonResponse.main.temp_min,
      temp_max: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
        console.log(result);
        return result;
    }catch(err){
     throw err;
     
    }

  };

    let handleChange = (e) =>{
      setCity(e.target.value);
    } 

    let handleSubmit = async (e) =>{
      try{

        e.preventDefault();
       console.log(city); 
       let NewInfo = await getWeatherInfo();
       updateInfo(NewInfo);
       setCity("");
      }
      catch(err){
        setErroe(true)
      }
    }
  return (
    <div>
      <h2>Search for the Weather</h2>
       
       <form onSubmit={handleSubmit}>
       <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br/>
        <br/>
       <Button variant="contained" type='submit' > Search </Button>
       {error && <p style={{color:"red"}}>No sach place exists!</p>}
       </form>
    </div>
  )
}

export default SerchBox
