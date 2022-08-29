import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { connect, useDispatch, useSelector } from "react-redux";

const Home = (props) => {
  return (

  );
};
const mapState = (state) => ({
  input: state.myCal.input,
});

const mapDispatch = (dispatch) => ({
  reset: dispatch.myCal.reset,
});

export default connect(mapState, mapDispatch)(Home);
