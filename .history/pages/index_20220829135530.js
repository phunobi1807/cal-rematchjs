import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { myCal } from "./../.history/models/models_20220826095827";
import { connect } from "react-redux";

const Home = ({ preState, curState, total, input, operator }) => {
  // const { preState, curState, total, input, operator } = useSelector(
  //   (state) => state.myCal
  // );

  const dispatch = useDispatch();
  console.log("preState", input);

  const inputNum = (e) => {
    const payload = {};
    if (curState?.includes(".") && e.target.innerText === ".") return;

    if (total) {
      payload.preState = "";
    }

    payload.curState = curState
      ? curState + e.target.innerText
      : e.target.innerText;
    payload.total = false;
    payload.input = payload.curState;

    dispatch({ type: "myCal/setState", payload });
  };

  useEffect(() => {
    dispatch({ type: "myCal/setState", payload: { input: "0" } });
  }, []);

  useEffect(() => {
    dispatch({ type: "myCal/setState", payload: { input: curState } });
  }, [curState]);

  const operatorType = (e) => {
    const operator = e.target.innerText;

    dispatch({ type: "myCal/setState", payload: { total: false, operator } });

    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      dispatch({
        type: "myCal/setState",
        payload: { preState: curState, curState: "" },
      });
    }
  };
  const equals = (e) => {
    dispatch({ type: "myCal/equals" });
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      dispatch({
        type: "myCal/setState",
        payload: { curState: curState.substring(1) },
      });
    } else {
      dispatch({
        type: "myCal/setState",
        payload: { curState: "-" + curState },
      });
    }
  };

  const percent = () => {
    dispatch({
      type: "myCal/setState",
      payload: {
        curState: preState
          ? String((parseFloat(curState) / 100) * preState)
          : String(parseFloat(curState) / 100),
      },
    });
  };

  const reset = () => {
    dispatch({ type: "myCal/reset" });
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="screen">
            {input !== "" || input === "0" ? (
              <NumberFormat
                value={input}
                displayType={"text"}
                thousandSeparator={true}
              />
            ) : (
              <NumberFormat
                value={preState}
                displayType={"text"}
                thousandSeparator={true}
              />
            )}
          </div>
          <div className="btn light-gray" onClick={reset}>
            AC
          </div>
          <div className="btn light-gray" onClick={percent}>
            %
          </div>
          <div className="btn light-gray" onClick={minusPlus}>
            +/-
          </div>
          <div className="btn orange" onClick={operatorType}>
            /
          </div>
          <div className="btn" onClick={inputNum}>
            7
          </div>
          <div className="btn" onClick={inputNum}>
            8
          </div>
          <div className="btn" onClick={inputNum}>
            9
          </div>
          <div className="btn orange" onClick={operatorType}>
            X
          </div>
          <div className="btn" onClick={inputNum}>
            4
          </div>
          <div className="btn" onClick={inputNum}>
            5
          </div>
          <div className="btn" onClick={inputNum}>
            6
          </div>
          <div className="btn orange" onClick={operatorType}>
            +
          </div>
          <div className="btn" onClick={inputNum}>
            1
          </div>
          <div className="btn" onClick={inputNum}>
            2
          </div>
          <div className="btn" onClick={inputNum}>
            3
          </div>
          <div className="btn orange" onClick={operatorType}>
            -
          </div>
          <div className="btn zero" onClick={inputNum}>
            0
          </div>
          <div className="btn" onClick={inputNum}>
            .
          </div>
          <div className="btn" onClick={equals}>
            =
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = (state) => ({
  myCal: state.myCal,
});
console.log(myCal);

const mapDispatch = (dispatch) => ({});
export default connect(mapState, mapDispatch)(Home);
