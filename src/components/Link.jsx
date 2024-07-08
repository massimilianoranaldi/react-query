function Link({ children }) {
  return (
    <>
      <a href="#">{children}</a>
    </>
  );
}
//children serve per consentire al componente di avere al suo interno un parametro
export default Link;
