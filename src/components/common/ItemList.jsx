import styled from "@emotion/styled";

function ItemList({ title, children }) {
  return (
    <ItemListContainer>
      <SListTitle>{title}</SListTitle>
      {children}
    </ItemListContainer>
  );
}

export default ItemList;

const ItemListContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 1rem;
  background-color: #fbfbfb;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const SListTitle = styled.h2`
  position: absolute;
  top: -1rem;
  left: 1rem;
  cursor: default;
  font-size: 16px;
  font-weight: bold;
`;
