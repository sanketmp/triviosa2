import { CircularProgress, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addScore } from "../redux/slices/scoreSlice";
import ProgressBar from "../components/ProgressBar";
import ErrorMessage from "../components/Error-message";
import "../styles/Quiz.css";

const Quiz = () => {
  const state = useSelector((state) => {
    return state.quiz;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [queNo, setqueNo] = useState(0);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const correct = state.data?.results[queNo]?.correct_answer;

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setOptions(
      state.data?.results &&
        handleShuffle([
          state.data?.results[queNo]?.correct_answer,
          ...state.data?.results[queNo]?.incorrect_answers,
        ])
    );
  }, [queNo, state]);

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "incorrect";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      dispatch(addScore(1));
    }
    setError(false);
  };

  const handleNext = () => {
    if (queNo > 8) {
      navigate("/result");
    } else if (selected) {
      setqueNo(queNo + 1);
      setSelected();
    } else setError("PLEASE SELECT AN OPTION FIRST");
  };

  return (
    <>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <ProgressBar count={queNo} />
      )}
      {state.isLoading ? (
        <>
          <CircularProgress
            style={{ margin: 100 }}
            color="inherit"
            size={50}
            thickness={10}
          />
        </>
      ) : (
        <section id="quiz">
          <div className="quiz-container">
            <div className="que-container">
              <h2
                dangerouslySetInnerHTML={{
                  __html: `&#40;${queNo + 1}&#41; ${
                    state.data.results[queNo].question
                  }`,
                }}
              />
            </div>
            <div className="options-container">
              <div className="option-list">
                {options &&
                  options.length &&
                  options?.map((op) => (
                    <>
                      <button
                        className={`singleOption  ${
                          selected && handleSelect(op)
                        }`}
                        dangerouslySetInnerHTML={{ __html: `${op}` }}
                        onClick={() => handleCheck(op)}
                        disabled={selected}
                      />
                    </>
                  ))}
              </div>
            </div>
            <Button
              className="next-controller"
              variant="contained"
              style={{ width: 100 }}
              onClick={handleNext}
            >
              {queNo > 8 ? "Submit" : "Next"}
            </Button>
          </div>
        </section>
      )}
    </>
  );
};

export default Quiz;
