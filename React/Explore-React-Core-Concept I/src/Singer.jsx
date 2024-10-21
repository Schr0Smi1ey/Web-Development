function Singer({ singer }) {
  const { id, name, age } = singer;
  return (
    <div className="Singer">
      <h1>Singer: {name}</h1>
      <h2>Id: {id}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}

export default Singer;
