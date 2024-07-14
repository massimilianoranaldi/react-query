//poi aggiungo parametro style , oppure in css
//per inserire codice java script nell'hml uso le graffe primo livello
// il secondo livello di graffe indica un oggetto

// 1. con reat si possono creare componenti che si possono richiamare nel progetto senza risctriverli
// 2.  stili dinamici
//3.  classi a livello dinamico
import "./Navbar.css";
import Link from "./Link";
import "./Navbar.css";

function Navbar() {
  const x = 1000;
  const y = 11;
  const img = "vite";
  const imgStyle = {
    height: y < 10 ? "200px" : "500px",
    borderRaius: "100%",
  };

  return (
    <>
      <nav>{x.toFixed(2)}</nav>
      <div className={`box rounded ${y < 10 ? "rotated" : ""}`}>ciao</div>
      <img
        src={`/${img}.svg`}
        // className="immagina-arrotondata"
        style={imgStyle}
      />
      <ul>
        <li>
          <Link>link 1</Link>
        </li>

        <li>
          <Link>link 2</Link>
        </li>

        <li>
          <Link>link 3</Link>
        </li>

        <li>
          <Link>link 4</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
