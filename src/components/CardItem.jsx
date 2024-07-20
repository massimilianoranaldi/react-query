function CardItem({ title, urlImmagine, visitato, children, count }) {
  return (
    <div className="rounded-md bg-zinc-950 hover:scale-105 transition-all ease-linear cursor-pointer">
      <img src={urlImmagine} className="rounded-t-md" alt=""></img>
      <div className="flex flex-col p-4">
        <h2 className="text-2x1 text-white font-bold ">{title}</h2>
        <p className="text-gray-500">{children}</p>
        {visitato && <span className="text-green-600">Visitata</span>}
        {!visitato && <span className="text-green-600">Non Visitata</span>}
      </div>
    </div>
  );
}

export default CardItem;
