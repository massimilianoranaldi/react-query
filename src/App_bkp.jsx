/* GENERALITA'
- start applicativo 
  C:\Users\massimiliano.ranaldi\ProgettoReact\querySiebel> npm run dev

- props (oppure properties o attributi)
- istallazione TailWind è un frame-work
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
- per richiamare api http è necessario istallare lato client il pacchetto
    npm install axios
  lato server è stato istallato cors per consentire di accettare le chiamate dall'app react e nel package.json è stato configurato il parametro
    "proxy": "http://localhost:5000",
*/

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

// sezione assets
import citta from "./assets/cities";

// sezione componenti
import "./components/Card"; //importo libreria
import Card from "./components/Card"; //creo oggetto
import "./components/CardForm";
import CardForm from "./components/CardForm";

function App() {
  // VARIABILI DI STATO
  //--------------------------------------------------------------------------------
  const [count, setCount] = useState(0); //uestate è composto da due oggetti : una variabile e lafunzione che la modifica: lo stato precedente viene person e sovrascritto con quello attuale
  //const cities = [...citta];
  const [cities, setCities] = useState([...citta]); //inizializzo lo stato con l'array iniziale (3 citta)
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  //FUNZIONE PER [AGGIUNGERE] UNA CITTA ALL'ARRAY
  //--------------------------------------------------------------------------------
  const aggiungiCitta = (city) => {
    setCities([...cities, city]);
  };

  //FUNZIONE PER [GET-RECUPERARE] IL CONTENUTO DEL FILE-ARRAY DELLE CITTA DA NODE-JS
  //--------------------------------------------------------------------------------
  const getArrayCities = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/persone/getReact/"
      );
      console.log("DATI DAL SERVER:", response.data);
      //setData(response.data);
      setCities(response.data);
    } catch (error) {
      console.error("Errore durante la richiesta API:", error);
      setError("Errore durante il recupero dei dati");
    }
  };

  //FUNZIONE PER [POST-INVIARE] LE CITTA AL FILE-ARRAY SU NODE-JS
  //--------------------------------------------------------------------------------
  const handlePostButton = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/persone/putReact",
        cities
      );
      console.log("Risposta dal server:", response.data);
      // Puoi gestire la risposta come necessario
    } catch (error) {
      console.error("Errore durante la richiesta API:", error);
      // Gestisci l'errore come necessario
    }
  };

  //FUNZIONE CHE VA AD AGGIORNARE IL FILE JSON DELLE CITTA [useEffect]
  //--------------------------------------------------------------------------------
  useEffect(() => {
    console.log("SONO IN USE EFFECT PER AGGIORNARE FILE ARRAY cities"); //viene eseguita solo dopo il render della pagina
    handlePostButton(); //aggiorno il mio repository
  }, [cities]);

  return (
    <>
      <div>
        <div>
          <h1>Elenco Città getArrayCities</h1>
          <button onClick={getArrayCities}>Carica Dati</button>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <h2>{item.nome}</h2>
                <img
                  src={item.urlImmagine}
                  alt={item.nome}
                  style={{ width: "200px", height: "auto" }}
                />
                <p>{item.descrizione}</p>
                <p>Visitato: {item.visitato ? "Sì" : "No"}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1>Invia Messaggio</h1>
          <button onClick={handlePostButton}>
            Invia Messaggio con handlePostButton
          </button>
        </div>

        {/* <h1>Recuperp DATI</h1>
        <button onClick={fetchDataFromApi}>
          Recupero dati con fetchDataFromApi
        </button> */}
        {/* 
        {error && <p>Errore: {error}</p>}

        {responseData && (
          <div>
            <h2>Dati ricevuti dall'API:</h2>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )} */}
      </div>
      {/*passo al componente , come propos direttamente la funzione che aggiunge la città cosi la puo richiamare */}
      <CardForm aggiungiCitta={aggiungiCitta}></CardForm>
      <div className="grid grid-cols-4 gap-10 bg-zinc-700">
        {cities
          //.filter((city) => city.visitato)
          .map((city) => (
            <Card
              key={city.id}
              titolo={city.nome}
              urlImmagine={city.urlImmagine}
              descrizione={city.descrizione}
              visitato={city.visitato}
            >
              provo
            </Card>
          ))}
      </div>
      {
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      }
    </>
  );
}

export default App;
