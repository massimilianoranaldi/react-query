import { useContext, useState, useEffect } from "react";
import { ProvaContext2 } from "../stores/ProvaContext2";

function Example({ cities }) {
  const { count, setCount } = useContext(ProvaContext2); //posso recuperare lo stato da ogni componente basta importare il contesto
  return (
    <div>
      <p>conteggio:{count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  );
}

export default Example;
