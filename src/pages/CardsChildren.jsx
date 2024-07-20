import NavBar from "../components/NavBar";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

function CardsChildren() {
  const cities = useSelector((state) => state.cities.value);
  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-3x1 font-bold">Pagina carte childre</h1>
      <div className="grid grid-cols-4 gap-10 bg-zinc-700">
        {cities.map((city) => (
          <Link to={`/cards-children/${city.id}`} key={city.id}>
            <CardItem
              titolo={city.nome}
              urlImmagine={city.urlImmagine}
              descrizione={city.descrizione}
              visitato={city.visitato}
            ></CardItem>
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default CardsChildren;
