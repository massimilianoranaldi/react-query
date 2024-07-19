import { increment, decrement } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Example() {
  const count = useSelector((state) => state.counter.value); //per prendere un vaòlore dallo stato
  const dispatch = useDispatch(); //per mandare dei comandi di modifica sullo stato
  return (
    <div>
      <p className="mb-3">conteggio:{count}</p>
      <button
        className="mr-3"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Incrementa
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrementa
      </button>
    </div>
  );
}

export default Example;
