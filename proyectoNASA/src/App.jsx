import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'; //para manejar la asincronía de las peticiones con esta librería

import Figure from './components/Figure/Figure'

const App = () => {
  
//importacion del logo
const logo = "https://res.cloudinary.com/dw9b8eqmc/image/upload/v1685922452/nasa-api-nominee_ifqimw.png"
 
//Recuperamos la fecha actual en un formato ISO -> 2022-01-01
const today = new Date(Date.now()).toISOString().slice(0, 10);

//Creamos una variable de estado llamada apod inicializada como objeto vacío
const [apod, setApod] = useState({});

//Creamos una variable de estado llamada date con la fecha del día actual formateada
const [date, setDate] = useState(today);

//se almacenan en constantes la URL de la NASA y la API KEY
const NASA_URL = "https://api.nasa.gov/";
const NASA_API_KEY = "mIqudWrUgurIZYKZH3RvHDmxvkjbdd9S7N55FhY3";

//El efecto del renderizado será hacer una petición de tipo get a la URL de la NASA
//utilizando la query de la fecha con el valor de date y añadiéndole al final 
//la API Key tal como indica en la documentación.

//Una vez realizada la petición se setea el data en apod y le indicamos en el 
//array de dependencias que no vuelva a lanzar el efecto hasta que cambie el estado
//de date
  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

//Crearemos una función que setee la fecha a través de un input en el formato 
//necesario (igual que el formato de today)
  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className="App">
      <h2 className="title">
        NASA API 
      </h2>
      <img src={logo} className="logo" alt="NASA LOGO" />
      <h1>Astronomy Picture of the Day</h1>
      <input type="date" id="photo-date" onChange={handleInput} />
      {date > today ? (<h2>Please choose a previous date</h2>) : (<Figure data={apod} />)}
      <div className="standard-dialog center">
        <h1 className="dialog-text">@lethamburn - 2022 - <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></h1>
      </div>
    </div>
  )
}

export default App