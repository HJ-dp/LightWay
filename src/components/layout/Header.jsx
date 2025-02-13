import styled from "@emotion/styled";
import Logo from "../common/Logo";
import Page_URL from "../../routes/PageURL";
import { Link } from "react-router-dom";

function Header({ height = 48, maxWidth = 1200, gridBox }) {
  return (
    <SContainer gridBox={gridBox}>
      <SHeader height={height} maxWidth={maxWidth}>
        <Logo height={height} />
        <SNav>
          <SUl>
            <li>
              <SLink to={Page_URL.main}>홈</SLink>
            </li>
            <li>
              <SLink to={Page_URL.main}>기록</SLink>
            </li>
            <li>
              <SLink to={Page_URL.main}>기록</SLink>
            </li>
            <li>
              <SLink to={Page_URL.main}>기록</SLink>
            </li>
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
  max-width: ${(props) => `${props.maxWidth}px`};
  display: flex;
  flex-shrink: 0;
  flex-grow: 1;
  place-items: center;
  margin: 0 auto;
  height: ${(props) => `${props.height}px`};
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
