const { useState } = React;

function ProductCard({ title, description, image }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <button onClick={() => setCount(count - 1)} className="btn">-</button>
          <span className="count">{count}</span>
          <button onClick={() => setCount(count + 1)} className="btn">+</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const products = [
    {
      title: "Consola de videojuegos",
      description: "Esta es una consola de videojuegos que entretiene a los programadores en sus breaks",
      image: "https://m.media-amazon.com/images/I/71MVoINi3aL._AC_SX679_.jpg"
    },
    {
      title: "Consola de videojuegos",
      description: "Esta es una consola de videojuegos que entretiene a los programadores en sus breaks",
      image: "https://m.media-amazon.com/images/I/71MVoINi3aL._AC_SX679_.jpg"
    },
    {
      title: "Consola de videojuegos",
      description: "Esta es una consola de videojuegos que entretiene a los programadores en sus breaks",
      image: "https://m.media-amazon.com/images/I/71MVoINi3aL._AC_SX679_.jpg"
    }
  ];

  return (
    <div className="container">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

// Renderizar en el div con id="root"
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
