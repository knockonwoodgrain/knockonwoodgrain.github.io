import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
      <button className="BackButton" onClick={() => navigate(-1)}>
        <span className="material-symbols-outlined">arrow_back</span>
        <div className="BackText">KnockOnWoodGrain</div>
      </button>
  );
}

export default BackButton;
