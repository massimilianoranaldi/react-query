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

import { useEffect, useReducer, useState, useContext } from "react";
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

//context
import { ProvaContext } from "./stores/ProvaContext.jsx";

function App() {
  // VARIABILI DI STATO
  //--------------------------------------------------------------------------------
  const [count, setCount] = useState(0); //uestate è composto da due oggetti : una variabile e lafunzione che la modifica: lo stato precedente viene person e sovrascritto con quello attuale
  //const cities = [...citta];
  const [cities, setCities] = useState([...citta]); //inizializzo lo stato con l'array iniziale (3 citta)
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  //USO REDUCER
  const [formState, dispatchFormState] = useReducer(formReducer, {
    //la funzione serve a modificare lo stato
    name: "",
    email: "",
  }); //la funzione dispacthFormState richiama la funzione formReducer per aggiornare lo stato

  //FUNZIONE PER [AGGIUNGERE] UNA CITTA ALL'ARRAY
  //--------------------------------------------------------------------------------
  const aggiungiCitta = (city) => {
    setCities([...cities, city]);
    console.log("-------------------------------------", city);
    handlePostButton2(city); //aggiorno il mio repository aggiungendo la sola citta
  };

  //FUNZIONE PER [GET-RECUPERARE] IL CONTENUTO DEL FILE-ARRAY DELLE CITTA DA NODE-JS
  //--------------------------------------------------------------------------------
  const getArrayCities = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/persone/getReact/"
      );
      console.log("DATI DAL SERVER:", response.data);
      setData(response.data);
      //setCities(response.data);
    } catch (error) {
      console.error("Errore durante la richiesta API:", error);
      setError("Errore durante il recupero dei dati");
    }
  };

  //FUNZIONE PER [POST-INVIARE] ARRAY DELLE AL FILE-ARRAY SU NODE-JS
  //--------------------------------------------------------------------------------
  const handlePostButton = async () => {
    //TUTTO ARRAY
    try {
      console.log("....... >>>> PUSH DATI VERSO SERVER:", cities);
      const response = await axios.post(
        "http://localhost:5000/api/persone/putReact",
        cities
      );

      console.log(
        "<<<< ..... RISPOSTA DAL SERVER:",
        response.data.datiCitta[0]
      );

      // Puoi gestire la risposta come necessario
    } catch (error) {
      console.error("Errore durante la richiesta API:", error);
      // Gestisci l'errore come necessario
    }
  };

  //FUNZIONE PER [POST-INVIARE] UNA CITTA AL FILE-ARRAY SU NODE-JS
  //--------------------------------------------------------------------------------
  const handlePostButton2 = async (city) => {
    //SOLO CITTA
    try {
      console.log("....... >>>> PUSH DATI VERSO SERVER2:", city);
      const response = await axios.post(
        "http://localhost:5000/api/persone/putReact2",
        city
      );

      console.log("<<<< ..... RISPOSTA DAL SERVER2:", response.data);

      // Puoi gestire la risposta come necessario
    } catch (error) {
      console.error("Errore durante la richiesta API:", error);
      // Gestisci l'errore come necessario
    }
  };

  //UTILIZZO DEL REDUCER
  //--------------------------------------------------------------------------------
  function formReducer(state, action) {
    //lo state ha questa struttura {
    //la funzione serve a modificare lo stato
    //   name: "",
    //   email: "",
    // } mentre la action è o "RESET_FORM" o "CHANGE_FIELD" e i parametri aggiuntivi nome e valore da cambiare
    switch (action.type) {
      case "CHANGE_FIELD":
        return { ...state, [action.field]: action.value };
      case "RESET_FORM":
        return { name: "", email: "" };
      default:
        return state;
    }
  }

  //UTILIZZO DEL REDUCER : FUNZIONE CHANGE FORM
  //--------------------------------------------------------------------------------
  //riceve nome e valore : "name",valore
  const handleFieldChange = (field, value) => {
    //quando cambio il valore nel campo voglio che si aggiorna la pagina
    console.log(formState);
    dispatchFormState({ type: "CHANGE_FIELD", field, value }); //chiamo la funzione che fa la modifica di un campo con un certo valore. etichetto questa modifica con CHANGE_FIELD
  };

  //UTILIZZO DEL REDUCER: FUNZIONE RESET  FORM
  //--------------------------------------------------------------------------------
  //riceve nome e valore : "name",valore
  const resetForm = (e) => {
    e.preventDefault();

    //quando cambio il valore nel campo voglio che si aggiorna la pagina
    dispatchFormState({ type: "RESET_FORM" }); //chiamo la funzione che fa la modifica di un campo con un certo valore. etichetto questa modifica con CHANGE_FIELD
    console.log(formState);
  };

  //UTILIZZO DEL REDUCER : FUNZIONE SEND  FORM
  //--------------------------------------------------------------------------------
  const sendForm = (e) => {
    e.preventDefault();
    console.log("FORMSTATE:...", formState);
  };

  //FUNZIONE CHE VA AD AGGIORNARE IL FILE JSON DELLE CITTA CON TUTTE LE CITTA[useEffect]
  //--------------------------------------------------------------------------------
  // useEffect(() => {
  //   console.log("SONO IN USE EFFECT PER AGGIORNARE FILE ARRAY cities"); //viene eseguita solo dopo il render della pagina
  //   handlePostButton(); //aggiorno il mio repository
  // }, [cities]);

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
        <form>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={(e) => handleFieldChange("name", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
            />
          </div>
          <button onClick={resetForm}>Reset</button>
          <button onClick={sendForm}>Invia</button>
        </form>
      }

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
