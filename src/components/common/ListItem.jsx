import styled from "@emotion/styled";

function ListItem({ width = 300, height = 150, title = "", content = "" }) {
  return (
    <SItemContainer width={width} height={height}>
      <STitle>{title}</STitle>
      <SP>{content}</SP>
    </SItemContainer>
  );
}

export default ListItem;

const SItemContainer = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-end;

  @media (max-width: 479px) {
    width: 100%;
  }
`;

const STitle = styled.h1`
  font-weight: bold;
  font-size: 14px;
`;

const SP = styled.p`
  font-size: 12px;
  white-space: pre-line;
`;
