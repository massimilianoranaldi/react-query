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

import "./App.css";

// sezione componenti
import CardForm from "./components/CardForm";
import Example from "./components/Example";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Example></Example>
      <CardForm></CardForm>
    </>
  );
}

export default App;
