import { useContext } from "react";
import { StyleContext } from "../../context/ContextProvider";

import styled from "@emotion/styled";
import Logo from "../common/Logo";
import Page_URL from "../../routes/PageURL";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLogout } from "../../auth/useLogout";
function Header({ gridBox }) {
  const { user } = useAuth();
  const { layoutValue } = useContext(StyleContext);
  const logout = useLogout;

  return (
    <SContainer gridBox={gridBox}>
      <SHeader style={layoutValue}>
        <Logo height={layoutValue.headerHeight} />
        <SNav>
          <SUl>
            <li>
              <SLink to={Page_URL.main}>홈</SLink>
            </li>
            {user ? (
              <>
                <li>
                  <SLink to={Page_URL.main}>기록</SLink>
                </li>
                <li>
                  <SLink to={Page_URL.main}>세팅</SLink>
                </li>
                <li>
                  <button onClick={() => logout()}>로그아웃</button>
                </li>
              </>
            ) : (
              <li>
                <SLink to={Page_URL.login}>로그인</SLink>
              </li>
            )}
          </SUl>
        </SNav>
      </SHeader>
    </SContainer>
  );
}

export default Header;
const SContainer = styled.header`
  width: 100%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-in-out;
  ${(props) => props.gridBox};
`;

const SHeader = styled.div`
  max-width: ${(props) => `${props.style.maxWidth}px`};
  display: flex;
  flex-shrink: 0;
  flex-grow: 1;
  place-items: center;
  margin: 0 auto;
  height: ${(props) => `${props.style.headerHeight}px`};
  justify-content: space-between;
`;

const SNav = styled.nav``;

const SUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.5rem;
`;

const SLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;
