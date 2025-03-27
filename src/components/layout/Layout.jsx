import { useContext, useEffect } from "react";
import { StyleContext } from "../../context/ContextProvider";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  MessageHandler();
  const { layoutValue } = useContext(StyleContext);
  return (
    <div>
      <Header gridBox={gridBox} />
      <SMain style={layoutValue}>
        <Outlet />
      </SMain>
      <Footer gridBox={gridBox} />
    </div>
  );
}

function MessageHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (e.data === "naver-login-success") {
        navigate("/");
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return null;
}

export default Layout;

export const gridBox = css`
  @media (min-width: 480px) and (max-width: 1024px) {
    padding: 0 3rem;
  }
  @media (max-width: 479px) {
    padding: 0 1rem;
  }
`;

const SMain = styled.main`
  min-height: ${(props) => `calc(100vh - ${props.style.headerHeight}px)`};
  max-width: ${(props) => `${props.style.maxWidth}px`};
  margin: 0 auto;
  ${gridBox}
  @media (max-width: 479px) {
    padding: 0;
  }
`;
