import { useNavigate } from "react-router-dom";

export const Card = ({ title, poster_path, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${id}`, { state: { poster_path } });
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-col bg-blue-800 w-48 flex-grow rounded-lg"
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt={title}
        className="rounded-t-lg"
      />
      <div className="flex flex-col gap-1 p-5 text-white">
        <div className="text-sm">{title}</div>
      </div>
    </div>
  );
};
