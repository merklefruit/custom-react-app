import { SET_THEME } from "./types";

export const initialState = {
  theme: localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    /*
    Set the color theme of the web app
    Default: "light" or "dark" string.
    See @components/layout/Layout to see theming logic
    */
    case SET_THEME:
      localStorage.setItem("theme", action.theme);
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
};

export default reducer;
