import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { X } from "phosphor-react";

const Navigation = ({ toggleMenu, setToggleMenu }) => {
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "100%" }}
            exit={{ x: "100%" }}
            animate={{ x: toggleMenu ? 0 : "100%" }}
            transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <div className="close" onClick={() => setToggleMenu(!toggleMenu)}>
              <X size={28} />
            </div>
            <div className="menu-wrap">
              <div className="menu">
                <a href="/">Home Page</a>
                <a href="/2">Second Page</a>
              </div>
            </div>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

const Nav = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background: ${({ theme }) => theme.tertiary};

  .close {
    position: absolute;
    top: 35px;
    right: 25px;
  }

  .menu-wrap {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .menu {
    padding-bottom: 1rem;
    text-align: center;

    a {
      display: block;
      margin-bottom: 2rem;
      font-size: 1.75rem;
      font-weight: 500;
      color: ${({ theme }) => theme.text};
    }
  }
`;
