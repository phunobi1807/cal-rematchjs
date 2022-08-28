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
  },
  effects: {},
};
