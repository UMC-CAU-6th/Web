import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const { movieTitle } = useParams();

  return (
    <div>
      <p>Details for: {movieTitle}</p>
    </div>
  );
}
