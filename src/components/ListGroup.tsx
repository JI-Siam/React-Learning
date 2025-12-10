function ListGroup() {
  const items = ["Apple", "Mango", "Guava", "Orange", "Banana"];
  return (
    <>
      <h1>List Title</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
