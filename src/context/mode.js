const darkMode = localStorage.getItem("darkMode") || false;

export const reMode = (state = darkMode, action) => {
  switch (action.type) {
    case "TOGGLE":
      return action.payload;
    default:
      return state;
  }
};

export const acMode = (payload) => ({ type: "TOGGLE", payload });
