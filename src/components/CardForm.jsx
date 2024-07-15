/*
flex : rende l'oggetto flessibile
flex-col : organizza i figli disponendoli in colonna "flex-row" in fila
 p-4 : padding di 4 tra un oggetto e l'altro

*/

function CardForm({ aggiungiCitta }) {
  const handlerCitta = () => {
    const city = {
      id: 4,
      nome: "PARIGI",
      urlImmagine:
        "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaWdpfGVufDB8fDB8fHww",
      descrizione: `
        ciao signori, 
        io sono parigi.
        coi chi siete ?...
        `,
      visitato: true,
    };
    console.log(city);
    aggiungiCitta(city);
  };

  return (
    <div className="flex flex-col gap-3 w-80 mb-10 bg-zinc-400">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button onClick={handlerCitta}>Aggiungi Card</button>
    </div>
  );
}

export default CardForm;
