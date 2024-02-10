import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../redux/slices/scoreSlice";
import { fetchQuestions } from "../redux/slices/quizSlice";
import "../styles/Result.css";

const Result = () => {
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitFromResultPage = () => {
    navigate("/quiz");
    dispatch(resetScore(0));
    dispatch(fetchQuestions());
  };

  return (
    <div id="result">
      <div className="res-container">
        <span className="res-title">Your Result</span>
        <span className="res-score">{score}</span>
        <Button
          className="res-button"
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleSubmitFromResultPage}
        >
          Start new
        </Button>
      </div>
    </div>
  );
};

export default Result;
