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

// sezione componenti

import "./components/Card"; //importo libreria
import Card from "./components/Card"; //creo oggetto

function App() {
  const [count, setCount] = useState(0);

  const cities = [
    {
      id: 1,
      nome: "TOKYO",
      urlImmagine:
        "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRva3lvfGVufDB8fDB8fHww",
      descrizione: `
ciao signori, 
io sono tokio.
coi chi siete ?...
`,
      visitato: true,
    },
    {
      id: 2,
      nome: "ROMA",
      urlImmagine:
        "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D",
      descrizione: `
ciao signori, 
io sono roma.
coi chi siete ?...
`,
      visitato: false,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        {cities.map((city) => (
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
      </div>
    </>
  );
}

export default App;
