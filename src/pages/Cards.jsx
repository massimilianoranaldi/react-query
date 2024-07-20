import NavBar from "../components/NavBar";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cards() {
  const cities = useSelector((state) => state.cities.value);
  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-3x1 font-bold">
        Pagina con tutte le card e link a sottopagina{" "}
      </h1>
      <div className="grid grid-cols-4 gap-10 bg-zinc-700">
        {cities.map((city) => (
          <Link to={`/cards/${city.id}`} key={city.id}>
            <CardItem
              titolo={city.nome}
              urlImmagine={city.urlImmagine}
              descrizione={city.descrizione}
              visitato={city.visitato}
            ></CardItem>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Cards;
