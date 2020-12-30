import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { useTheme } from "@hooks/useTheme";

import { BaseStyles } from "@styles/base";
import { lightTheme, darkTheme } from "@styles/themes";

import { motion, AnimatePresence } from "framer-motion";
import { variants } from "@utils/transitionVariants";

// Components
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { theme } = useTheme();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BaseStyles />

      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

      <AnimatePresence>
        <motion.main
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
