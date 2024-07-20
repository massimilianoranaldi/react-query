import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Card() {
  const { cardID } = useParams();
  const cities = useSelector((state) =>
    state.cities.value.filter((city) => city.id == cardID.toString())
  );
  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-3x1 font-bold">{cities[0].name} </h1>
      <div className="flex flex-col p-4">
        {cities[0].visitato && <span className="text-green-600">Visitata</span>}
        {!cities[0].visitato && (
          <span className="text-green-600">non Visitata</span>
        )}
      </div>
      <img
        src={cities[0].urlImmagine}
        className="=rounded-t-md"
        alt=""
        width="400"
      ></img>
    </>
  );
}
export default Card;
