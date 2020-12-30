import { useGlobalContext } from "@context/global";
import { SET_THEME } from "@context/types";

/*
  Simple theme toggling hook
  Returns the current theme and a function to toggle it.
*/
export function useTheme() {
  const [{ theme }, dispatch] = useGlobalContext();

  const toggleTheme = (t) => {
    dispatch({
      type: SET_THEME,
      theme: t,
    });
  };

  return { theme, toggleTheme };
}
