import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { connect, useDispatch, useSelector } from "react-redux";

const Home = (props) => {
  const {preState, curState, input, operator, total, name} = props
  console.log(name)
  return (
    <>
      <h1>HEllo</h1>
    </>
  );
};
const mapState = (state) => ({
  preState: state.myCal.preState,
  curState: state.myCal.curState,
  input: state.myCal.input,
  operator: state.myCal.operator,
  total: state.myCal.total,

});

const mapDispatch = dispatch => ({
  reset: dispatch.myCal.reset,
});
console.log("re", reset.input)

export default connect(mapState, mapDispatch)(Home);
