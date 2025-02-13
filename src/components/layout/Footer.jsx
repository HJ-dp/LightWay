import styled from "@emotion/styled";

function Footer({ height = 48, maxWidth = 1200, gridBox }) {
  return (
    <Containter>
      <SFooter height={height} maxWidth={maxWidth} gridBox={gridBox}>
        푸터
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
  height: ${(props) => `${props.height}px`};
  max-width: ${(props) => `${props.maxWidth}px`};
  margin: 0 auto;
  ${(props) => props.gridBox};
`;
