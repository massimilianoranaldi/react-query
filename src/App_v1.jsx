/* GENERALITA'
- start applicativo 
  C:\Users\massimiliano.ranaldi\ProgettoReact\querySiebel> npm run dev

- props (oppure properties o attributi)
- istallazione TailWind è un frame-work
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
*/

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import citta from "./assets/cities";

// sezione componenti

import "./components/Card"; //importo libreria
import Card from "./components/Card"; //creo oggetto

//nel caso viene dichiara fuori
function handleConteggio2(conteggio, setConteggio) {
  setConteggio((conteggio) => conteggio + 1);
}

function App() {
  const [count, setCount] = useState(0); //uestate è composto da due oggetti : una variabile e lafunzione che la modifica: lo stato precedente viene person e sovrascritto con quello attuale
  const cities = [...citta];
  //let conteggio = 0;

  const [conteggio, setConteggio] = useState(0); //uestate è composto da due oggetti : una variabile e lafunzione che la modifica: lo stato
  //dichiarata dentro la funzione principale
  function handleConteggio() {
    setConteggio((conteggio) => conteggio + 1);
  }

  //esempio di stati ad array
  const [item, setItems] = useState([1, 2, 3]);
  function aggiornaItem() {
    const nuovoItem = 4;
    console.log("ITEM : ", item);
    setItems([...item, nuovoItem]);
  }

  //oppure un oggetto
  const [user, setUser] = useState({ name: "Alice", age: "21" });
  const updateUser = () => {
    const newUser = { name: "pippo", age: "33" };
    console.log("USER : ", user);
    setUser(newUser);
  };
  //   const cities = [
  //     {
  //       id: 1,
  //       nome: "TOKYO",
  //       urlImmagine:
  //         "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRva3lvfGVufDB8fDB8fHww",
  //       descrizione: `
  // ciao signori,
  // io sono tokio.
  // coi chi siete ?...
  // `,
  //       visitato: true,
  //     },
  //     {
  //       id: 2,
  //       nome: "ROMA",
  //       urlImmagine:
  //         "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D",
  //       descrizione: `
  // ciao signori,
  // io sono roma.
  // coi chi siete ?...
  // `,
  //       visitato: false,
  //     },
  //   ];

  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        {cities
          //.filter((city) => city.visitato)
          .map((city) => (
            <Card
              key={city.id}
              titolo={city.nome}
              urlImmagine={city.urlImmagine}
              descrizione={city.descrizione}
              visitato={city.visitato}
            ></Card>
          ))}
        {/* 
        <Card
          titolo={cities[0].nome}
          urlImmagine={cities[0].urlImmagine}
          descrizione={cities[0].descrizione}
          visitato={cities[0].visitato}
        ></Card>
        <Card
          titolo={cities[1].nome}
          urlImmagine={cities[1].urlImmagine}
          descrizione={cities[1].descrizione}
          visitato={cities[1].visitato}
        ></Card> */}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {
          // conteggio viene incrementato, ma poichè non è una variabile di stato, nella pagina non si vede il refresh e quindi react non la aggiorna. quindi devo far diventare conteggio una variabile di stato
        }
        {/* <button onClick={() => console.log(conteggio++)}>
          conteggio is {conteggio}
        </button> */}
        <button onClick={handleConteggio}>conteggio is {conteggio}</button>
        <button
          onClick={function () {
            handleConteggio2(conteggio, setConteggio);
          }}
        >
          conteggio is {conteggio}
        </button>

        <button onClick={updateUser}>user is {user.name}</button>

        <button onClick={aggiornaItem}>user is {item}</button>
      </div>
    </>
  );
}

export default App;
