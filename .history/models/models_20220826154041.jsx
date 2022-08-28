const initialState = {
  preState: "",
  curState: "",
  input: "0",
  operator: null,
  total: false,
};

export const myCal = {
  state: initialState,
  reducers: {
    setState: (state, payload = {}) => {
      state = {
        ...state,
        ...payload,
      };

      return state;
    },

    reset: (state) => {
      state = {
        ...state,
        preState: "",
        curState: "",
        input: "0",
      };

      return state;
    },
    equals: (state) => {
      const { operator, preState, curState, total, e } = state;
      if (e?.target.innerText === "=") {
        total;
      }
      let cal;
      switch (operator) {
        case "/":
          cal = parseFloat(preState) / parseFloat(curState);
          break;

        case "+":
          cal = parseFloat(preState) + parseFloat(curState);
          break;
        case "X":
          cal = parseFloat(preState) * parseFloat(curState);
          break;
        case "-":
          cal = parseFloat(preState) - parseFloat(curState);
          break;
        default:
          return;
      }

      state = { ...state, input: "", preState: cal, curState: "", total: true };
    },
  },
  effects: {},
};