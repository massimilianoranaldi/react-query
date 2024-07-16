/*
flex : rende l'oggetto flessibile
flex-col : organizza i figli disponendoli in colonna "flex-row" in fila
 p-4 : padding di 4 tra un oggetto e l'altro

*/
import { useState } from "react";

function CardForm({ aggiungiCitta }) {
  const [formData, setFormData] = useState({
    nome: "",
    descrizione: "",
    urlImmagine: "",
    visitato: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue }); //sovrascriviamo solo la proprieta che ha come nome: inputValue aggiorna real time l'interfaccia. [name] ci deve essere il nome dell'attrinuto del formadata
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("debug");
    const city = {
      id: 5,
      nome: formData.nome,
      urlImmagine: formData.urlImmagine,
      descrizione: formData.descrizione,
      visitato: formData.visitato,
    };

    aggiungiCitta(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg"
    >
      <div>
        <div className="flex flex-col">
          <label className="text-gray-100">Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-100">Descrizione</label>
          <textarea
            name="descrizione"
            value={formData.descrizione}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-100">Immagine</label>
          <input
            type="text"
            name="urlImmagine"
            value={formData.urlImmagine}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-100">Visitata</label>
          <input
            type="checkbox"
            name="visitato"
            checked={formData.visitato}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Aggiungi Card</button>
      </div>
    </form>
  );
}

export default CardForm;
