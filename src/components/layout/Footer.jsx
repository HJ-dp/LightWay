import { useContext } from "react";
import { StyleContext } from "../../context/ContextProvider";

import styled from "@emotion/styled";

function Footer({ gridBox }) {
  const { layoutValue } = useContext(StyleContext);
  return (
    <Containter>
      <SFooter style={layoutValue} gridBox={gridBox}>
        <SP>© LightWay All rights reserved.</SP>
      </SFooter>
    </Containter>
  );
}

export default Footer;

const Containter = styled.footer`
  background-color: #e6e6e6;
`;

const SFooter = styled.div`
  width: 100%;
  height: ${(props) => `${props.style.footerHeight}px`};
  max-width: ${(props) => `${props.style.maxWidth}px`};
  margin: 0 auto;
  ${(props) => props.gridBox};
  display: grid;
  place-items: center;
`;

const SP = styled.p`
  color: #606060;
  font-size: 12px;
`;
