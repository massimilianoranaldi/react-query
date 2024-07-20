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

// sezione componenti
import Card from "./components/Card"; //creo oggetto
import CardForm from "./components/CardForm";
import Example from "./components/Example";
import { useSelector } from "react-redux"; //è un hook di redux che serve a selezionare lo stato

function App() {
  //state è salvato nel store.js;e all'interno c'è lo stato "cities"; il "value" di cities si trova nel file citiesSlice.js e rappresenta l'array di citta. con questa unica riga di codice possiamo importare cities ovunque
  const cities = useSelector((state) => state.cities.value);

  return (
    <>
      <Example></Example>
      <CardForm></CardForm>
      <div className="grid grid-cols-4 gap-10 bg-zinc-700">
        {cities.map((city) => (
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
    </>
  );
}

export default App;
