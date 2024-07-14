/*
flex : rende l'oggetto flessibile
flex-col : organizza i figli disponendoli in colonna "flex-row" in fila
 p-4 : padding di 4 tra un oggetto e l'altro

*/

import "./Card.css";

// USO DEL PROPS
// function Card(props) {
//   const title = props.titolo;
//   const imgUrl = props.urlImmagine;
//   const description = props.descrizione;
//   //   const description = `select *
//   // from
//   // pippo where ciccio
//   // /**/ -- 'r' "grh"`;
//   return (
//     <div className="rounded-md bg-zinc-950">
//       <img src={imgUrl} alt=""></img>
//       <div className="flex flex-col p-4">
//         <h2 className="text-2xl text-white font-bold"> {title}</h2>
//         <p className="formattazione text-gray-500">{description}</p>
//       </div>
//     </div>
//   );
// }

// USO DELLA DECOMPOSITION JAVA SCRIPT
function Card({
  titolo,
  urlImmagine,
  descrizione,
  visitato,
  children, //rappresenta tutto quello che vado a mettere all'interno di CARD
}) {
  const visitatoCheck = visitato ? "✔️ visitato" : " ❌ non visitato";
  return (
    <div className="rounded-md bg-zinc-950">
      <img src={urlImmagine} alt=""></img>
      <div className="flex flex-col p-4">
        <h2 className="text-2xl text-white font-bold"> {titolo}</h2>
        <p className="formattazione text-gray-500">
          {descrizione}
          {children}
        </p>
        <span>{visitatoCheck} </span>
      </div>
    </div>
  );
}

export default Card;
