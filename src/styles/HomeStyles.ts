import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  margin-top: 16px;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  padding: 12px;
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(7, 1fr);
    padding: 0;
  }
`;

export const Header = styled.header`
  position: sticky;
  width: 100%;
  background: white;
  top: 0;
  z-index: 50;
  height: fit-content;
  transition: all 0.3s ease-in-out;
`;
