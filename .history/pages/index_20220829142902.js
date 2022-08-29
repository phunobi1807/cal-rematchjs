import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { connect, useDispatch, useSelector } from "react-redux";

const Home = (props) => {
  const {preState, curState, input, operator, total, name} = props
  console.log(name)
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};
const mapState = (state) => ({
  input: state.myCal.input,
  name: state.myCal.name
});

const mapDispatch = (dispatch) => ({
  reset: dispatch.myCal.reset,
});

export default connect(mapState, mapDispatch)(Home);
