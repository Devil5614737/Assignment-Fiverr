import styled from "styled-components";

export const Nav = styled.nav`
  padding: 12px;
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 212px;
`;
export const LinksContainer = styled.li`
  display: none;
  a {
    font-size: 1.4rem;
    display: inline-block;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;

    color: #000000;
  }
  @media screen and (min-width: 700px) {
    display: block;
  }
`;
