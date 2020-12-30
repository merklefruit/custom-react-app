import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme } from "@hooks/useTheme";

import { Container } from "@styles/global";
import { MoonStars, Sun, List, X } from "phosphor-react";

const Header = ({ toggleMenu, setToggleMenu }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <CustomHeader>
        <div className="header-nav">
          <div className="logo">
            <span>
              <Link to="/">Template</Link>
            </span>
          </div>
          <div className="nav-items">
            <p>
              <Link to="/2">Second Page</Link>
            </p>
            {theme === "light" && (
              <button onClick={() => toggleTheme("dark")}>
                <MoonStars size={24} />
              </button>
            )}
            {theme === "dark" && (
              <button onClick={() => toggleTheme("light")}>
                <Sun size={24} />
              </button>
            )}
          </div>

          <div className="nav-mobile">
            <div onClick={() => setToggleMenu(!toggleMenu)}>
              {toggleMenu ? <X size={28} /> : <List size={28} />}
            </div>
          </div>
        </div>
      </CustomHeader>
    </Container>
  );
};

export default Header;

const CustomHeader = styled.div`
  display: block;
  position: relative;
  margin-top: 25px;

  a {
    color: ${({ theme }) => theme.text};
  }

  .header-nav {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    span {
      font-size: 1.5rem;
    }
  }

  .nav-items {
    display: flex;
    align-items: center;

    @media (max-width: 550px) {
      display: none;
    }

    p {
      a {
        margin-left: 2rem;
      }
    }
  }

  .nav-mobile {
    @media (min-width: 550px) {
      display: none;
    }

    display: flex;
    align-items: center;
  }

  button {
    background: none;
    margin-left: 2rem;
    font-size: 2rem;
    border: none;
    color: ${({ theme }) => theme.text};
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }
`;
