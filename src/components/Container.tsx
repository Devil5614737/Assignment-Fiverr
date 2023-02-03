import { FC, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1232px;
  margin: 0 auto;
`;

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
