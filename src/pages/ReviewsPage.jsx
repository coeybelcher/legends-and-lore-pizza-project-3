import { useApp } from "../context/AppContext";
import ReviewForm from "../components/ReviewForm";

export default function ReviewsPage() {
  const { reviews } = useApp();

  return (
    <div className="page">
      <h2>Reviews</h2>

      <ReviewForm />

      <div className="card-grid">
        {reviews.map((r) => (
          <div className="card" key={r.id}>
            <h3>{r.name}</h3>
            <p>{"⭐".repeat(r.rating)}</p>
            <p>{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}