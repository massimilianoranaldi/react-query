import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="flex gap-10 mb-10">
      <li>
        <Link to={`/`}>home</Link>
      </li>
      <li>
        <Link to={`/contatti`}>contatti</Link>
      </li>
      <li>
        <Link to={`/about`}>about</Link>
      </li>
      <li>
        <Link to={`/cards`}>card v1</Link>
      </li>
      <li>
        <Link to={`/cards-children`}>card v2</Link>
      </li>
    </ul>
  );
}

export default NavBar;
