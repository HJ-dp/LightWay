import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { css } from "@emotion/react";

export const HeaderHeight = 50;
export const FooterHeight = 100;
export const MaxWidth = 1024;

function Layout() {
  return (
    <div>
      <Header height={HeaderHeight} maxWidth={MaxWidth} gridBox={gridBox} />
      <SMain height={HeaderHeight} maxWidth={MaxWidth}>
        <Outlet />
      </SMain>
      <Footer height={FooterHeight} maxWidth={MaxWidth} gridBox={gridBox} />
    </div>
  );
}

export default Layout;

export const gridBox = css`
  @media (max-width: 479px) {
    padding: 0 1rem;
  }
`;

const SMain = styled.main`
  min-height: ${(props) => `calc(100vh - ${props.height}px)`};
  max-width: ${(props) => `${props.maxWidth}px`};
  margin: 0 auto;
  ${gridBox}
`;
