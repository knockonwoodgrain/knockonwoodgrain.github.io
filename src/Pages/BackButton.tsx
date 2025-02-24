import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
      <button className="BackButton" onClick={() => navigate(-1)}>
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
  );
}

export default BackButton;
