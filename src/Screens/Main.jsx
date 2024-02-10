import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchQuestions } from "../redux/slices/quizSlice";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(fetchQuestions());
    navigate("/quiz");
  };

  return (
    <div
      style={{
        marginTop: "20%",
        marginLeft: "50%",
        transform: "translate(-50%, -50%)",
        width: "fit-content",
      }}
      className="start"
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSubmit}
      >
        Start
      </Button>
    </div>
  );
};

export default Main;
