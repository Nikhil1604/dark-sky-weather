import {useState} from 'react';
import './App.css';

function App() {
  const [city,setCity]=useState("")
  const [selectCity,setSelectCity]=useState("")

  

  const getData = async() => {
    const url = `https://the-weather-api.p.rapidapi.com/api/weather/${selectCity}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '06ba227d34mshf7b8ed3ef468cacp183958jsne2561aa23ed9',
        'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
      }
    };
  
  
    const response = await fetch(url, options);
    const result = await response.json();
    setCity(result.data)
    console.log(city)
    
  }

 
  
  const outer = {
    textAlign:'center',
    width:'80%',
    margin:'auto',
    display:'flex',
    flexDirection:'column',
    fontSize:"1.325rem",
    justifyContent:'center',
    padding:'20px',
    backgroundColor:'red'

  }
  const inner={
    height:'100px',
    width:"50%",
    margin:"auto",
    display:'flex',
    flexDirection:"column",
    paddingTop:'10px',
    // fontSize:'32px'
  }
  
  const custompadd={
    padding:"10px", 
    fontSize:'20px'
  }
  const custButton ={
    padding:"10px",
    width:'50%',
    margin:'auto',
    fontSize:"20px"
  }

  


  return (
    <div style={outer}>
    <h3>This is Weather React app</h3>
    <div style={inner}>
      <input style={custompadd} placeholder="City Name" type="text"
      value={selectCity} 
      onChange={e => setSelectCity(e.target.value)}
      />
    </div>

    <button style={custButton} onClick={getData}>Click Me</button>

    {
      city ? <>
        <h1>{city.city}</h1>
        <h3>Temperature {city.temp} </h3>
        <h3>Current waether {city.current_weather}</h3>
        <h3>Wind {city.wind}</h3>
        <h3>Humidity{city.humidity}</h3>
      </>
            

      :null

    }
    


    </div>
  );
}

export default App;
