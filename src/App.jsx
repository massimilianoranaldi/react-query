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

import { useState } from "react";
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
  const [count, setCount] = useState(0); //uestate è composto da due oggetti : una variabile e lafunzione che la modifica: lo stato precedente viene person e sovrascritto con quello attuale
  //const cities = [...citta];
  const [cities, setCities] = useState([...citta]); //inizializzo lo stato con l'array iniziale (3 citta)

  const aggiungiCitta = (city) => {
    //    setCities([...cities, city]);
    setCities([...cities, city]);
  };

  //ESEMPIO CHIAMATA API GET NODE _ JS
  // const [responseData, setResponseData] = useState(null);
  // const fetchDataFromApi = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/persone/");
  //     setResponseData(response.data);
  //   } catch (error) {
  //     console.error("Errore durante la richiesta API:", error);
  //     setError("Errore durante il recupero dei dati");
  //   }
  // };

  //ESEMPIO CHIAMATA API GET NODE _ JS NEW
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const getArrayCities = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/persone/getReact/"
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Errore durante la richiesta API:", error);
      setError("Errore durante il recupero dei dati");
    }
  };

  //ESEMPIO CHIAMATA API POST NODE _ JS
  const handlePostButton = async () => {
    //   const cittaPost = {
    //     id: 5,
    //     nome: "SIDNEY",
    //     urlImmagine:
    //       "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     descrizione: `
    // ciao signori,
    // io sono sidney.
    // coi chi siete ?...
    // `,
    //     visitato: true,
    //   };
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
