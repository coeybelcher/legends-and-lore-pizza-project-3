import { useApp } from "../context/AppContext";

export default function MenuPage() {
  const { pizzas } = useApp();

  return (
    <div className="page">
      <h2>Menu</h2>

      <div className="card-grid">
        {pizzas.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p><strong>${p.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}